import readlineSync from 'readline-sync';
import { getTask, getCorrectAnswer } from './api';

const gameRoundsCount = 3;

export default (createGameData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (gameRound) => {
    if (gameRound === gameRoundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const createRoundData = createGameData();
    const task = getTask(createRoundData);
    console.log(`Question: ${task}`);

    const answerInput = String(readlineSync.question('Your answer: '));
    const correctAnswer = String(getCorrectAnswer(createRoundData));
    if (answerInput === correctAnswer) {
      console.log('Correct!');
      iter(gameRound + 1);
    } else {
      console.log(`'${answerInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };

  iter(0);
};
