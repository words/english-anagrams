require('chai').should()
const {describe, it} = require('mocha')
const anagrams = require('.')

describe('anagrams', () => {
  it('accepts a word and returns an array of anagrams', () => {
    const words = anagrams('nerdish')
    words.should.be.an('array')
    words.should.include('nerdish')
    words.should.include('shrined')
    words.should.include('hinders')
  })

  it('returns null for words with no anagrams', () => {
    (typeof anagrams('kjsdofisdufs')).should.eq('undefined')
  })
})
