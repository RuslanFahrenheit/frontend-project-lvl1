import readlineSync from 'readline-sync';

export const question = (str) => readlineSync.question(str);

export const isEven = (n) => n % 2 === 0;

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getPlayerName = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const userName = question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  return userName;
};

export const askIfNumberIsEven = () => {
  const userName = getPlayerName();

  const iter = (gameLevel) => {
    const maxGameLevels = 3;
    if (gameLevel === maxGameLevels) {
      console.log(gameLevel);
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const minLimitValue = 1;
    const maxLimitValue = 100;
    const randomNumber = getRandomInt(minLimitValue, maxLimitValue);
    console.log(`Question: ${randomNumber}`);

    const answerInput = String(question('Your answer: '));
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (answerInput === correctAnswer) {
      console.log('Correct!');
      iter(gameLevel + 1);
    } else {
      console.log(`'${answerInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };

  return iter(0);
};
