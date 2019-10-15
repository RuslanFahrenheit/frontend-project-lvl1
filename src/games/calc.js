import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';

const minLimitValue = 1;
const maxLimitValue = 100;

export default () => {
  const randomValue1 = getRandomInt(minLimitValue, maxLimitValue);
  const randomValue2 = getRandomInt(minLimitValue, maxLimitValue);
  const rules = 'What is the result of the expression?';

  let task = null;
  let correctAnswer = '';
  switch (getRandomInt(0, 2)) {
    case 0:
      task = `${randomValue1} + ${randomValue2}`;
      correctAnswer = `${randomValue1 + randomValue2}`;
      break;
    case 1:
      task = `${randomValue1} - ${randomValue2}`;
      correctAnswer = `${randomValue1 - randomValue2}`;
      break;
    default:
      task = `${randomValue1} * ${randomValue2}`;
      correctAnswer = `${randomValue1 * randomValue2}`;
  }

  return makeGame(task, correctAnswer, rules);
};
