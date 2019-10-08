export const isEven = (n) => n % 2 === 0;

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};
