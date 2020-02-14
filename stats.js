'use strict'

var u = require('unist-builder')
var zone = require('mdast-zone')
var words = require('an-array-of-english-words')
var anagrams = require('./anagrams.json')

module.exports = stats

var keys = Object.keys(anagrams)
var wordCount = words.length
var anagramCount = keys.reduce((acc, d) => acc + anagrams[d].length, 0)
var wordsWithAnagrams = anagramCount / words.length

var longest = keys.reduce((acc, d) => (d.length > acc.length ? d : acc), '')

var most = keys.reduce(
  (acc, d) => (anagrams[d].length > (anagrams[acc] || []).length ? d : acc),
  ''
)

function stats() {
  return transform

  function transform(tree) {
    zone(tree, 'stats', onstats)
  }

  function onstats(start, _, end) {
    var fragment = [
      u('heading', {depth: 2}, [u('text', 'Stats')]),
      u('list', [
        u('listItem', [
          u('paragraph', [
            u('text', 'Words in dictionary:\n'),
            u('strong', [
              u(
                'text',
                wordCount.toLocaleString('en-US', {notation: 'compact'})
              )
            ])
          ])
        ]),
        u('listItem', [
          u('paragraph', [
            u('text', 'Anagrams:\n'),
            u('strong', [
              u(
                'text',
                anagramCount.toLocaleString('en-US', {notation: 'compact'})
              )
            ])
          ])
        ]),
        u('listItem', [
          u('paragraph', [
            u('text', 'Words w/ anagrams:\n'),
            u('strong', [
              u(
                'text',
                wordsWithAnagrams.toLocaleString('en-US', {style: 'percent'})
              )
            ])
          ])
        ]),
        u('listItem', [
          u('paragraph', [
            u('text', 'Group of most anagrams:\n'),
            u('strong', [u('text', String(anagrams[most].length))])
          ])
        ]),
        u('listItem', [
          u(
            'paragraph',
            [].concat.apply(
              [],
              u('text', 'Longest group of anagrams:\n'),
              anagrams[longest].map((d, i) => {
                var node = u('strong', [u('text', d)])
                return i ? [u('text', ', '), node] : [node]
              })
            )
          )
        ])
      ]),
      u('heading', {depth: 2}, [u('text', 'Top 20 matches')]),
      u(
        'list',
        keys
          .sort((a, b) => anagrams[b].length - anagrams[a].length)
          .slice(0, 20)
          .map(d =>
            u('listItem', [
              u('paragraph', [
                u('strong', [u('text', anagrams[d].length)]),
                u('text', ': ' + anagrams[d].join(', '))
              ])
            ])
          )
      )
    ]

    return [].concat(start || [], fragment, end || [])
  }
}
