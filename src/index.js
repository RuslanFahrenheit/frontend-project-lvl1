import readlineSync from 'readline-sync';
import { getTask, getCorrectAnswer, getRules } from './api';

const question = (str) => readlineSync.question(str);

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const rules = getRules(game());
  console.log(rules);
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const maxGameRounds = 3;
  const iter = (gameRound) => {
    if (gameRound === maxGameRounds) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const currentRoundGame = game();
    const task = getTask(currentRoundGame);
    console.log(`Question: ${task}`);

    const answerInput = String(question('Your answer: '));
    const correctAnswer = String(getCorrectAnswer(currentRoundGame));
    if (answerInput === correctAnswer) {
      console.log('Correct!');
      iter(gameRound + 1);
    } else {
      console.log(`'${answerInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };

  return iter(0);
};
