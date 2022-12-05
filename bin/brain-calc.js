import readlineSync from 'readline-sync';
import inputName from '../src/cli.js';

const getRandom = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};
const getRandomOperator = () => {
  const operatorArray = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operatorArray.length);
  const operator = operatorArray[index];
  return operator;
};
const correct = (number1, number2, oper) => {
  let result = null;
  switch (oper) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
  }
  return result;
};

const calcGame = () => {
  const name = inputName();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const oper = getRandomOperator();
    const number1 = getRandom(1, 20);
    const number2 = getRandom(1, 20);
    const question = `${number1} ${oper} ${number2}`;
    const answer = correct(number1, number2, oper).toString();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}`);
      break;
    }
  }
};
calcGame();
export default calcGame;
