# quick-is-prime

[![NPM Version](https://img.shields.io/npm/v/quick-is-prime.svg)](https://www.npmjs.com/package/quick-is-prime)
[![Build Status](https://travis-ci.org/dsernst/quick-is-prime.svg?branch=master)](https://travis-ci.org/dsernst/quick-is-prime)
[![Coverage Status](https://coveralls.io/repos/dsernst/quick-is-prime/badge.svg?branch=master&service=github)](https://coveralls.io/github/dsernst/quick-is-prime?branch=master)

Test if a number is prime in constant time, using a cached Sieve of Eratosthenes. This is especially helpful to test many numbers' primality.

## Install

```
$ npm install quick-is-prime
```

```js
var isPrime = require('quick-is-prime');
```

## Usage

```js
// Simple examples
isPrime(47) // => true
isPrime(48) // => false
isPrime(61) // => true
isPrime(100) // => false

// More challenging examples
isPrime(9998903) // => true, takes 1.5 seconds
isPrime(9893899) // => true, takes less than a millisecond
```

This module uses a cached Sieve of Eratosthenes for constant time lookup. A new one will be automatically generated if the number you're testing is larger than the currently cached sieve's upper bound.

**For best results**, check primes highest to lowest. Or alternatively, if you know what the upper bound will be, just check that first to not be concerned with the order.

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```
$ npm install
$ npm test
```

To test code coverage:

```
$ npm run cover
```
