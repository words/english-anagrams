'use strict'

var test = require('tape')
var anagrams = require('.')

test('anagrams', function(t) {
  t.deepEqual(
    anagrams('nerdish'),
    ['hinders', 'shrined'],
    'should return a list of anagrams'
  )

  t.deepEqual(
    anagrams('kjsdofisdufs'),
    [],
    'should return an empty array for words with no anagrams'
  )

  t.deepEqual(
    anagrams(),
    [],
    'should return an empty array if no value is given'
  )

  t.end()
})
