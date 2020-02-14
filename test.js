'use strict'

var test = require('tape')
var anagrams = require('.')

test('anagrams', function(t) {
  t.deepEqual(
    anagrams('nerdish'),
    ['hinders', 'nerdish', 'shrined'],
    'should return a list of anagrams'
  )

  t.equal(
    anagrams('kjsdofisdufs'),
    undefined,
    'should return null for words with no anagrams'
  )

  t.equal(anagrams(), null, 'should return null if no value is given')

  t.end()
})
