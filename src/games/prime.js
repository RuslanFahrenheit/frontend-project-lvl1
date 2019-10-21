import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';
import buildGame from '..';

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
const minLimitValue = 1;
const maxLimitValue = 100;

export const createGameData = () => {
  const task = getRandomInt(minLimitValue, maxLimitValue);
  const correctAnswer = isPrime(task) ? 'yes' : 'no';
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  return makeGame(task, correctAnswer, rules);
};

export default () => buildGame(createGameData);
