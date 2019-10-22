import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';
import buildGame from '..';

const getGcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGcd(b, a % b);
};
const min = 1;
const mix = 100;
const description = 'Find the greatest common divisor of given numbers.';

const createGameData = () => {
  const randomValue1 = getRandomInt(min, mix);
  const randomValue2 = getRandomInt(min, mix);
  const task = `${randomValue1} ${randomValue2}`;
  const correctAnswer = getGcd(randomValue1, randomValue2);

  return makeGame(task, correctAnswer);
};

export default () => buildGame(createGameData, description);
