'use strict'

var sort = require('./sort')
var map = require('./anagrams.json')

module.exports = anagrams

var own = {}.hasOwnProperty

function anagrams(word) {
  var sorted = sort(word)
  return own.call(map, sorted) ? map[sorted] : []
}
