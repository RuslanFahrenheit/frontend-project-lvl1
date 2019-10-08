export const isEven = (n) => n % 2 === 0;

export const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};
