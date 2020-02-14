'use strict'

module.exports = sort

function sort(value) {
  return value
    ? value
        .split('')
        .sort()
        .join('')
    : ''
}
