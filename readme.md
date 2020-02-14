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

console.log(anagrams('nerdish'))
console.log(anagrams('kjsdofisdufs'))
```

Yields:

```js
['hinders', 'shrined']
[]
```

## API

### `englishAnagrams(word)`

Given a word, I’ll give you a list of anagrams, or an empty array if no anagrams
were found.

<!--stats start-->

## Stats

*   Words in dictionary:
    **275K**
*   Anagrams:
    **53K**
*   Words w/ anagrams:
    **19%**
*   Group of most anagrams:
    **13**
*   Longest group of anagrams:
    **microphotographies**, **photomicrographies**

## Top 20 matches

*   **13**: apers, apres, asper, pares, parse, pears, prase, presa, rapes, reaps, spaer, spare, spear
*   **13**: arets, aster, earst, rates, reast, resat, stare, stear, strae, tares, taser, tears, teras
*   **12**: alerts, alters, artels, estral, laster, ratels, salter, slater, staler, stelar, talers, tarsel
*   **12**: least, leats, salet, setal, slate, stale, steal, stela, taels, tales, teals, tesla
*   **11**: anestri, antsier, nastier, ratines, resiant, retains, retinas, retsina, stainer, starnie, stearin
*   **11**: angriest, angstier, astringe, ganister, gantries, granites, ingrates, rangiest, reasting, stearing, tasering
*   **11**: easting, eatings, gainest, genista, ingates, ingesta, seating, tagines, tangies, teasing, tsigane
*   **11**: palest, palets, pastel, peltas, petals, plaste, plates, pleats, septal, staple, tepals
*   **10**: angries, earings, erasing, gainers, graines, reagins, regains, reginas, searing, seringa
*   **10**: deros, doers, dores, dorse, doser, redos, resod, rodes, rosed, sored
*   **10**: lapse, leaps, pales, peals, pelas, pleas, salep, sepal, spale, speal
*   **9**: acers, acres, cares, carse, escar, races, scare, scrae, serac
*   **9**: airts, artis, astir, raits, sitar, stair, stria, tarsi, tiars
*   **9**: aretes, easter, eaters, reates, reseat, saeter, seater, steare, teaser
*   **9**: aridest, asterid, astride, diaster, disrate, staider, staired, tardies, tirades
*   **9**: arles, earls, laers, lares, laser, lears, rales, reals, seral
*   **9**: aspers, parses, passer, prases, repass, spaers, spares, sparse, spears
*   **9**: ates, east, eats, etas, sate, seat, seta, taes, teas
*   **9**: capers, crapes, escarp, pacers, parsec, recaps, scrape, secpar, spacer
*   **9**: carets, cartes, caster, caters, crates, cresta, reacts, recast, traces

<!--stats end-->

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
