var fs = require('fs')
var words = require('an-array-of-english-words')
var sort = require('./sort')

var own = {}.hasOwnProperty

var all = {}
var anagrams = {}

words.forEach(word => {
  var sorted = sort(word)

  if (!own.call(all, sorted)) {
    all[sorted] = []
  }

  all[sorted].push(word)
})

Object.keys(all).forEach(sorted => {
  if (all[sorted].length !== 1) {
    anagrams[sorted] = all[sorted]
    console.log(all[sorted])
  }
})

fs.writeFileSync('anagrams.json', JSON.stringify(anagrams, null, 2) + '\n')
