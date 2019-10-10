import { isPrime, getRandomInt } from '../helpers';
import { makeGame } from '../api';

export default () => {
  const minLimitValue = 1;
  const maxLimitValue = 100;
  const randomNumber = getRandomInt(minLimitValue, maxLimitValue);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  return makeGame(randomNumber, correctAnswer, rules);
};
