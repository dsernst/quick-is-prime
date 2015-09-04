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

  it('is very quick for numbers less than the highest already tested', function () {
    assert(isPrime(9893899) === true);
  });
});
