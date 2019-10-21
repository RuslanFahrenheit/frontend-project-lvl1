import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';
import buildGame from '..';

const getGcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGcd(b, a % b);
};
const minLimitValue = 1;
const maxLimitValue = 100;
const description = 'Find the greatest common divisor of given numbers.';

const createGameData = () => {
  const randomValue1 = getRandomInt(minLimitValue, maxLimitValue);
  const randomValue2 = getRandomInt(minLimitValue, maxLimitValue);
  const task = `${randomValue1} ${randomValue2}`;
  const correctAnswer = getGcd(randomValue1, randomValue2);

  return makeGame(task, correctAnswer, description);
};

export default () => buildGame(createGameData);
