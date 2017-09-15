const path = require('path')
const fs = require('fs')
const pkg = require('./package.json')
const words = require('./words') // TODO replace with an-array-of-english-words
const anagrams = require('./anagrams.json')
const anagramCount = Object.keys(anagrams)
  .reduce((acc, key) => {
    acc += anagrams[key].length
    return acc
  }, 0)

const anagramArray = Object.keys(anagrams)
  .map(key => anagrams[key])

const mostMatches = anagramArray
  .sort((a, b) => b.length - a.length)[0]

const longestWord = anagramArray
  .sort((a, b) => b[0].length - a[0].length)[0]

const readme = `

# ${pkg.name}

> ${pkg.description}

## Installation

\`\`\`sh
npm install english-anagrams
\`\`\`

## Usage

\`\`\`js
const anagrams = require('english-anagrams')

anagrams('nerdish')
// => [ 'hinders', 'nerdish', 'shrined' ]
\`\`\`

Note: Search is case *insensitive*

## Stats

- total words in [source dataset](http://ghub.io/an-array-of-english-words): ${words.length}
- total anagrams: ${anagramCount}
- words that have anagrams: ${parseInt(anagramCount / words.length * 100)}%
- longest word: ${longestWord.join(', ')}
- most matches: ${mostMatches.length}

## Top Matches

${
  anagramArray
    .sort((a, b) => b.length - a.length)
    .slice(0, 20)
    .map(r => '- ' + r.join(', '))
    .join('\n') 
}
`

fs.writeFileSync(path.join(__dirname, 'readme.md'), readme)
