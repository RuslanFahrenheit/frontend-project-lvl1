import readlineSync from 'readline-sync';

export const question = (str) => readlineSync.question(str);

export const isEven = (n) => n % 2 === 0;

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const greet = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const userName = question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
};

export const askIfNumberIsEven = (gameLevel = 0) => {
  if (gameLevel === 3) {
    console.log('Congratulations, Sam!');
    return;
  }

  const MIN_VALUE = 1;
  const MAX_VALUE = 100;
  const randomNumber = getRandomInt(MIN_VALUE, MAX_VALUE);
  console.log(`Question: ${randomNumber}`);

  const answerInput = String(question('Your answer: '));
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  if (answerInput === correctAnswer) {
    console.log('Correct!');
    askIfNumberIsEven(gameLevel + 1);
  } else {
    console.log(`'${answerInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log('Let\'s try again, Bill!');
  }
};
