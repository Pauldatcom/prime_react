/**
 * Vérifie si un nombre est premier en utilisant l'algorithme optimisé.
 * Un nombre premier est un nombre naturel supérieur à 1 qui n'a que deux diviseurs : 1 et lui-même.
 * 
 * @param number - Le nombre à vérifier
 * @returns true si le nombre est premier, false sinon
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

