'use strict'

var sort = require('./sort')
var map = require('./anagrams.json')

module.exports = anagrams

function anagrams(word) {
  if (!word || word.length === 0) return null
  return map[sort(word.toLowerCase())]
}
