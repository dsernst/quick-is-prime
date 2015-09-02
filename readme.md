# quick-is-prime

[![NPM Version](https://img.shields.io/npm/v/quick-is-prime.svg)](https://www.npmjs.com/package/quick-is-prime)

Test if a number is prime in constant time, using a cached Sieve of Eratosthenes.

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
console.log(isPrime(47)); // true
console.log(isPrime(48)); // false
console.log(isPrime(61)); // true
console.log(isPrime(100)); // false

// More challenging examples
console.log(isPrime(9998903)) // true, only takes 1.5 seconds
console.log(isPrime(9893899)) // true, adds no extra calculation time
```

This module uses a cached Sieve of Eratosthenes for constant time lookup. A new one will be automatically generated if the prime is larger than the current cached sieve. 

For best results, check primes highest to lowest. Alternatively, if you know what the upper-bound will be, you can just check that first and then not be concerned with the order.
