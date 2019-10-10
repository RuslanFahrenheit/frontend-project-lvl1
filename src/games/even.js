import { isEven, getRandomInt } from '../helpers';
import { makeGame } from '../api';

export default () => {
  const minLimitValue = 1;
  const maxLimitValue = 100;
  const randomNumber = getRandomInt(minLimitValue, maxLimitValue);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const rules = 'Answer "yes" if number even otherwise answer "no".';

  return makeGame(randomNumber, correctAnswer, rules);
};
