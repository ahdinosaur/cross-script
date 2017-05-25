const spawn = require('cross-spawn')
const crossScript = require('./')

const args = process.argv.slice(3)
const command = process.argv[2]

crossScript(command, args, { stdio: 'inherit' })
