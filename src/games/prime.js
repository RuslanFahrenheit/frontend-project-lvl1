import { isPrime, getRandomInt } from '../helpers';
import { makeGame } from '../api';

export default () => {
  const minLimitValue = 1;
  const maxLimitValue = 100;
  const randomNumber = getRandomInt(minLimitValue, maxLimitValue);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return makeGame(randomNumber, correctAnswer);
};
