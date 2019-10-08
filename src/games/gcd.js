import { getRandomInt, gcd } from '../helpers';
import { makeGame } from '../api';

export default () => {
  const minLimitValue = 1;
  const maxLimitValue = 100;
  const randomNumber1 = getRandomInt(minLimitValue, maxLimitValue);
  const randomNumber2 = getRandomInt(minLimitValue, maxLimitValue);
  const task = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = gcd(randomNumber1, randomNumber2);

  return makeGame(task, correctAnswer);
};
