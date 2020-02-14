'use strict'

module.exports = sort

function sort(value) {
  return value
    .split('')
    .sort()
    .join('')
}
