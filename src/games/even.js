import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';
import buildGame from '..';

const isEven = (n) => n % 2 === 0;
const min = 1;
const max = 100;
const description = 'Answer "yes" if number even otherwise answer "no".';

const createGameData = () => {
  const task = getRandomInt(min, max);
  const correctAnswer = isEven(task) ? 'yes' : 'no';

  return makeGame(task, correctAnswer);
};

export default () => buildGame(createGameData, description);
