import { getRandomInt } from '../helpers';
import { makeGame } from '../api';

export default () => {
  const minLimitValue = 1;
  const maxLimitValue = 100;
  const randomNumber1 = getRandomInt(minLimitValue, maxLimitValue);
  const randomNumber2 = getRandomInt(minLimitValue, maxLimitValue);

  let task = null;
  let answer = '';
  switch (getRandomInt(0, 2)) {
    case 0:
      task = `${randomNumber1} + ${randomNumber2}`;
      answer = `${randomNumber1 + randomNumber2}`;
      break;
    case 1:
      task = `${randomNumber1} - ${randomNumber2}`;
      answer = `${randomNumber1 - randomNumber2}`;
      break;
    default:
      task = `${randomNumber1} * ${randomNumber2}`;
      answer = `${randomNumber1 * randomNumber2}`;
  }

  return makeGame(task, answer);
};
