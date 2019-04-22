// # Prime Factors
//
// Compute the prime factors of a given natural number.
//
// A prime number is only evenly divisible by itself and 1.
//
// Note that 1 is not a prime number.
//
// ## Example
//
// What are the prime factors of 60?
//
// - Our first divisor is 2. 2 goes into 60, leaving 30.
// - 2 goes into 30, leaving 15.
//   - 2 doesn't go cleanly into 15. So let's move on to our next divisor, 3.
// - 3 goes cleanly into 15, leaving 5.
//   - 3 does not go cleanly into 5. The next possible factor is 4.
//   - 4 does not go cleanly into 5. The next possible factor is 5.
// - 5 does go cleanly into 5.
// - We're left only with 1, so now, we're done.
//
// Our successful divisors in that computation represent the list of prime
// factors of 60: 2, 2, 3, and 5.
//
// You can check this yourself:
//
// - 2 * 2 * 3 * 5
// - = 4 * 15
// - = 60
// - Success!


export const primeFactors = n => {
  if (n <= 1) {
    return [];
  }
  const limit = Math.ceil(n ** 0.5);
  let sieve = [...Array(limit - 1).keys()].map(x => x + 2);
  for (let k = 0; k < limit - 1; k++) {
    if (sieve[k]) {
      for (let m = k + sieve[k]; m < limit - 1; m += sieve[k]) {
        sieve[m] = null
      }
    }
  }
  const factors = sieve.filter(x => x);
  const factorSet = new Set(factors);
  let i = 0;
  let number = n;
  let result = [];
  while (i < factors.length) {
    if (!factorSet.has(number)) {
      if (number % factors[i] === 0) {
        result.push(factors[i]);
        number = number / factors[i];
      } else {
        i += 1;
      }
    } else {
      result.push(number);
      number = 1;
      break;
    }
  }
  if (number !== 1) {
    result.push(number);
  }
  if (!result.length) {
    result.push(n);
  }
  return result;
}
