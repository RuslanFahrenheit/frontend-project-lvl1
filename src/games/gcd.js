import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';
import buildGame from '..';

const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};
const minLimitValue = 1;
const maxLimitValue = 100;

const createGameData = () => {
  const randomValue1 = getRandomInt(minLimitValue, maxLimitValue);
  const randomValue2 = getRandomInt(minLimitValue, maxLimitValue);
  const task = `${randomValue1} ${randomValue2}`;
  const correctAnswer = gcd(randomValue1, randomValue2);
  const rules = 'Find the greatest common divisor of given numbers.';

  return makeGame(task, correctAnswer, rules);
};

export default () => buildGame(createGameData);
