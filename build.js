var fs = require('fs')
var words = require('an-array-of-english-words')
var sort = require('./sort')

var results = {}

var all = words.map(word => ({orig: word, sorted: sort(word)}))

all.forEach(word => {
  var sorted = word.sorted
  var anagrams

  if (results[sorted]) return

  anagrams = words.filter(word => word.sorted === sorted).map(word => word.orig)

  if (anagrams.length > 1) {
    results[sorted] = anagrams
    console.log(anagrams.join(', '))
  }
})

fs.writeFileSync('anagrams.json', JSON.stringify(results, null, 2) + '\n')
