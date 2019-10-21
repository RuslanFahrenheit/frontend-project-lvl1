import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';
import buildGame from '..';

const isEven = (n) => n % 2 === 0;
const minLimitValue = 1;
const maxLimitValue = 100;

const createGameData = () => {
  const task = getRandomInt(minLimitValue, maxLimitValue);
  const correctAnswer = isEven(task) ? 'yes' : 'no';
  const rules = 'Answer "yes" if number even otherwise answer "no".';

  return makeGame(task, correctAnswer, rules);
};

export default () => buildGame(createGameData);
