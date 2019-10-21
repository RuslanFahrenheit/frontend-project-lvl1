import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';
import buildGame from '..';

const isEven = (n) => n % 2 === 0;
const minLimitValue = 1;
const maxLimitValue = 100;
const description = 'Answer "yes" if number even otherwise answer "no".';

const createGameData = () => {
  const task = getRandomInt(minLimitValue, maxLimitValue);
  const correctAnswer = isEven(task) ? 'yes' : 'no';

  return makeGame(task, correctAnswer, description);
};

export default () => buildGame(createGameData);
