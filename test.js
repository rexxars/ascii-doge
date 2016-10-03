var assert = require('assert')
var doge = require('./index.js')

assert.equal(doge.toString(), doge.toArray().join('\n'))
console.log('toString() === toArray().join("\\n")')

assert(doge.toString().indexOf('▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌') > -1)
console.log(doge.toString())
console.log(':thumbsup:')
