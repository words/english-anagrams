# english-anagrams

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Find anagrams for English words.
Works offline.

## Install

[npm][]:

```sh
npm install english-anagrams
```

## Use

```js
var anagrams = require('english-anagrams')

anagrams('nerdish')
```

Yields:

```js
['hinders', 'nerdish', 'shrined']
```

## API

### `englishAnagrams(word)`

Given a word, I’ll give you a list of anagrams, when available.

## License

[MIT][license] © [Zeke Sikelianos][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/words/english-anagrams.svg

[build]: https://travis-ci.org/words/english-anagrams

[downloads-badge]: https://img.shields.io/npm/dm/english-anagrams.svg

[downloads]: https://www.npmjs.com/package/english-anagrams

[size-badge]: https://img.shields.io/bundlephobia/minzip/english-anagrams.svg

[size]: https://bundlephobia.com/result?p=english-anagrams

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: http://zeke.sikelianos.com
