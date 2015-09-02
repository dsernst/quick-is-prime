var sieveSet = require('sieve-set');

var sieve = {};
var upperBound = 0;

function updateSieve(max) {
  sieve = sieveSet(max);
  upperBound = max;
}

module.exports = function (number) {
  if (number > upperBound) {
    updateSieve(number);
  }
  return !!sieve[number];
};
