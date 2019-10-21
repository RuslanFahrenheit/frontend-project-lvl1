import getRandomInt from '../getRandomInt';
import { makeGame } from '../api';
import buildGame from '..';

const description = 'What number is missing in the progression?';

export const createGameData = () => {
  const progressionSize = 10;
  const hiddenProgressionStep = getRandomInt(2, progressionSize);
  const startStep = getRandomInt(2, 20);
  const progressionStepsDifference = getRandomInt(2, 30);

  const iter = (counter, currentStep) => {
    if (counter - 1 === progressionSize) {
      return currentStep;
    }

    const currentProgressionStep = startStep + (counter - 1) * progressionStepsDifference;
    const nextStep = (counter === hiddenProgressionStep) ? '..' : currentProgressionStep;

    return iter(counter + 1, `${currentStep} ${nextStep}`);
  };

  const task = iter(2, startStep);
  const correctAnswer = startStep + progressionStepsDifference * (hiddenProgressionStep - 1);

  return makeGame(task, correctAnswer, description);
};

export default () => buildGame(createGameData);
