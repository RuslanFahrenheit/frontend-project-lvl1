import getRandomInt from '../helpers/getRandomInt';
import { makeGame } from '../api';

export default () => {
  const progressionSize = 10;
  const hiddenProgressionStep = getRandomInt(1, progressionSize);
  const startStep = getRandomInt(2, 20);
  const progressionStepsDifference = getRandomInt(2, 30);
  const rules = 'What number is missing in the progression?';

  const iter = (counter, currentStep) => {
    if (counter - 1 === progressionSize) {
      return currentStep;
    }

    const currentProgressionStep = startStep + (counter - 1) * progressionStepsDifference;
    const nextStep = (counter === hiddenProgressionStep) ? '..' : currentProgressionStep;

    return iter(counter + 1, `${currentStep} ${nextStep}`);
  };

  const task = iter(2, startStep);
  const correctAnswer = progressionStepsDifference;

  return makeGame(task, correctAnswer, rules);
};
