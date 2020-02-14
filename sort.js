'use strict'

module.exports = sort

function sort(value) {
  return value
    ? value
        .toLowerCase()
        .split('')
        .sort()
        .join('')
    : ''
}
