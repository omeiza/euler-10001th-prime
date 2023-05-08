/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */

function nthPrime(n: number): number {
	function isPrime(input: number): boolean {
		for (let i = 2; i < input; i++) {
			if (input % i === 0) return false;
		}

		return input > 1;
	}

	let primeCount = 0;
	for (let x = 1; x < Infinity; x++) {
		if (isPrime(x)) primeCount++;
		if (primeCount === n) return x;
	}

	return primeCount;
}

console.log(nthPrime(10001));