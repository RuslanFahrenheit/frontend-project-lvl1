import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';
import buildGame from '..';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
const min = 1;
const max = 100;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const createGameData = () => {
  const task = getRandomInt(min, max);
  const correctAnswer = isPrime(task) ? 'yes' : 'no';

  return makeGame(task, correctAnswer);
};

export default () => buildGame(createGameData, description);
