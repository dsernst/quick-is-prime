/*global describe,it*/

var isPrime = require('./index.js');
var assert = require('assert');

describe('isPrime', function () {
  it('returns true if a number is prime', function () {
    assert(isPrime(47) === true);
    assert(isPrime(61) === true);
  });

  it('returns false if a number is composite', function () {
    assert(isPrime(48) === false);
    assert(isPrime(100) === false);
  });

  it('works for larger numbers too', function () {
    assert(isPrime(9998903) === true);
  });

  it('takes less than a millisecond to test numbers less than the highest already tested', function () {
    var start = process.hrtime();
    assert(isPrime(9893899) === true);
    var durationInNanoseconds = process.hrtime(start)[1];
    assert(durationInNanoseconds < 1000000);
  });
});
