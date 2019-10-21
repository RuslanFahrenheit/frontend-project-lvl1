import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';
import buildGame from '..';

const minLimitValue = 1;
const maxLimitValue = 100;
const operators = '+-*';
const createCorrectAnswer = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      break;
  }
  return null;
};
const description = 'What is the result of the expression?';

const createGameData = () => {
  const randomValue1 = getRandomInt(minLimitValue, maxLimitValue);
  const randomValue2 = getRandomInt(minLimitValue, maxLimitValue);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const task = `${randomValue1} ${operator} ${randomValue2}`;
  const correctAnswer = createCorrectAnswer(randomValue1, randomValue2, operator);

  return makeGame(task, correctAnswer, description);
};

export default () => buildGame(createGameData);
