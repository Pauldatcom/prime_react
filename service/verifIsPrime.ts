/**
 * Checks if a number is prime using an optimized algorithm.
 * A prime number is a natural number greater than 1 that has only two divisors: 1 and itself.
 * 
 * @param number - The number to check
 * @returns true if the number is prime, false otherwise
 */
export function verifIsPrime(number: number): boolean {
  if (!Number.isInteger(number) || number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  if (number % 2 === 0) {
    return false;
  }

  const sqrt = Math.sqrt(number);
  for (let i = 3; i <= sqrt; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

