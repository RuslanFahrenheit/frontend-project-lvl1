import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';

const isEven = (n) => n % 2 === 0;
const minLimitValue = 1;
const maxLimitValue = 100;

export default () => {
  const randomValue = getRandomInt(minLimitValue, maxLimitValue);
  const correctAnswer = isEven(randomValue) ? 'yes' : 'no';
  const rules = 'Answer "yes" if number even otherwise answer "no".';

  return makeGame(randomValue, correctAnswer, rules);
};
