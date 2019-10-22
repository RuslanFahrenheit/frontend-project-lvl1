import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';
import buildGame from '..';

const progressionSize = 10;
const description = 'What number is missing in the progression?';

export const createGameData = () => {
  const hiddenElementIndex = getRandomInt(2, progressionSize);
  const startStep = getRandomInt(2, 20);
  const progressionStepsDifference = getRandomInt(2, 30);

  const iter = (counter, currentStep) => {
    if (counter - 1 === progressionSize) {
      return currentStep;
    }

    const currentProgressionStep = startStep + (counter - 1) * progressionStepsDifference;
    const nextStep = (counter === hiddenElementIndex) ? '..' : currentProgressionStep;

    return iter(counter + 1, `${currentStep} ${nextStep}`);
  };

  const task = iter(2, startStep);
  const correctAnswer = startStep + progressionStepsDifference * (hiddenElementIndex - 1);

  return makeGame(task, correctAnswer);
};

export default () => buildGame(createGameData, description);
