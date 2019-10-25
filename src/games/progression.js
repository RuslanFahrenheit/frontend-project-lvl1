import {
  cons,
  head,
  tail,
  reverse,
  isEmpty,
} from '@hexlet/pairs-data';
import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';
import buildGame from '..';

const progressionSize = 10;
const progressionStart = getRandomInt(0, 20);
const progressionDifference = getRandomInt(2, 30);
const hiddenElementIndex = getRandomInt(0, progressionSize - 1);
const description = 'What number is missing in the progression?';

const generateProgression = (start, difference, size) => {
  const iter = (counter, acc) => {
    if (counter === size - 1) {
      return reverse(acc);
    }

    const currentStep = head(acc) + difference;
    return iter(counter + 1, cons(currentStep, acc));
  };

  return iter(0, cons(start, null));
};

export const createGameData = () => {
  const progression = generateProgression(progressionStart, progressionDifference, progressionSize);

  const iter = (counter, list, acc) => {
    if (isEmpty(list)) {
      return acc;
    }

    if (counter === hiddenElementIndex) {
      return iter(counter + 1, tail(list), `${acc} ..`);
    }

    return iter(counter + 1, tail(list), `${acc} ${head(list)}`);
  };

  const task = iter(0, progression, '');

  const correctAnswer = progressionStart + hiddenElementIndex * progressionDifference;

  return makeGame(task, correctAnswer);
};

export default () => buildGame(createGameData, description);
