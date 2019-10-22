import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';
import buildGame from '..';

const min = 1;
const max = 100;
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
  const randomValue1 = getRandomInt(min, max);
  const randomValue2 = getRandomInt(min, max);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const task = `${randomValue1} ${operator} ${randomValue2}`;
  const correctAnswer = createCorrectAnswer(randomValue1, randomValue2, operator);

  return makeGame(task, correctAnswer);
};

export default () => buildGame(createGameData, description);
