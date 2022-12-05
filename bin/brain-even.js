import readlineSync from 'readline-sync';
import inputName from '../src/cli.js';

const getRandom = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

const evenGame = () => {
  const name = inputName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const random = getRandom(1, 100);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if (random % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      i += 1;
    } else if (random % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      i += 1;
    } else if (random % 2 === 0 && answer === 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      break;
    } else if (random % 2 !== 0 && answer === 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      break;
    } else {
      console.log('You need type "yes" or "no"');
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}`);
  }
};
evenGame();
export default evenGame;
