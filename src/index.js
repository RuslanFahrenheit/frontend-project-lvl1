import readlineSync from 'readline-sync';

export const question = (str) => readlineSync.question(str);

export const isEven = (n) => n % 2 === 0;

export const greet = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const userName = question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
};

export const askIfNumberIsEven = () => {
  const randomNumber = Math.round(Math.random() * 10);
  console.log(`Question: ${randomNumber}`);
  const answer = question('Your answer: ');

  console.log(isEven(randomNumber));
};
