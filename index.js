const spawn = require('cross-spawn')
const VariableRegex = require('es6-template-regex')
const execall = require('execall')
const zipObj = require('@f/zip-obj')

module.exports = crossScript

const variableRegex = VariableRegex()
const scriptRegex = /\$\(([^\\)]*(?:\\.[^\\)]*)*)\)/g

function crossScript (command, args, options) {
  args = args
    .map(string => {
      const variables = getMatches(variableRegex, string)
      const values = variables.map(name => process.env[name])
      const data = zipObj(variables, values)
      return interpolate(variableRegex, string, data)
    })
    .map(string => {
      const scripts = getMatches(scriptRegex, string)
      const values = scripts.map(script => {
        const scriptArgs = script.split(/\s+/)
        // TODO async-ify spawn
        const result = spawn.sync(scriptArgs[0], scriptArgs.slice(1))
        if (result.err) throw err
        else return result.stdout.toString().trim()
      })
      const data = zipObj(scripts, values)
      return interpolate(scriptRegex, string, data)
    })

  return spawn(command, args, options)
}

function interpolate(regex, string, data) {
  return string.replace(regex, (m, prop) => data[prop])
}

function getMatches (regex, string) {
  return execall(regex, string).map(match => match.sub[0])
}
