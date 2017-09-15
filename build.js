const path = require('path')
const fs = require('fs')

const words = require('./words.json')
  .map(word => {
    return {
      orig: word,
      sorted: word.split('').sort().join('')
    }
  })

const results = {}

words.forEach(word => {
  const sorted = word.sorted

  if (results[sorted]) return

  const anagrams = words
    .filter(word => word.sorted === sorted)
    .map(word => word.orig)

  if (anagrams.length > 1) {
    results[sorted] = anagrams
    console.log(anagrams.join(', '))
  }
})

fs.writeFileSync(
  path.join(__dirname, 'anagrams.json'),
  JSON.stringify(results, null, 2)
)
