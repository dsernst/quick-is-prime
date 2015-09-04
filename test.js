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

  it('can test a 7-digit numbers in under two seconds', function () {
    var start = process.hrtime();
    assert(isPrime(9998903) === true);
    var durationInNanoseconds = process.hrtime(start)[1];
    assert(durationInNanoseconds < 2000000000);
  });

  it('takes under a millisecond for numbers less than the highest already tested', function () {
    var start = process.hrtime();
    assert(isPrime(9893899) === true);
    var durationInNanoseconds = process.hrtime(start)[1];
    assert(durationInNanoseconds < 1000000);
  });

  it('returns false for 0, 1, and negative numbers', function () {
    assert(isPrime(0) === false);
    assert(isPrime(1) === false);
    assert(isPrime(-3) === false);
  });

  it('returns false for strings', function () {
    assert(isPrime('hello') === false);
  });

});
