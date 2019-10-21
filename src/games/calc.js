import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';
import buildGame from '..';

const minLimitValue = 1;
const maxLimitValue = 100;
const operatorsList = '+-*';
const operatorsListLength = operatorsList.length;
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
  const operatorIndex = getRandomInt(0, operatorsListLength - 1);
  const operator = operatorsList[operatorIndex];
  const task = `${randomValue1} ${operator} ${randomValue2}`;
  const correctAnswer = createCorrectAnswer(randomValue1, randomValue2, operator);

  return makeGame(task, correctAnswer, description);
};

export default () => buildGame(createGameData);
