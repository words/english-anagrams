const anagrams = require('./anagrams.json')

module.exports = function (word) {
  if (!word || !word.length) return null
  return anagrams[word.toLowerCase().split('').sort().join('')]
}
