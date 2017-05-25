const test = require('tape')

const crossScript = require('../')

test('cross-script', function (t) {
  t.ok(crossScript, 'module is require-able')
  t.end()
})
