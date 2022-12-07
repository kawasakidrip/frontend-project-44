import logics from '../index.js';
import { getRandom, getRandomOperator } from '../function.js';

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
const description = 'What is the result of the expression?';

const game = () => {
  const number1 = getRandom(1, 20);
  const number2 = getRandom(1, 20);
  const oper = getRandomOperator();
  const question = `${number1} ${oper} ${number2}`;
  const answer = correct(number1, number2, oper).toString();
  return [question, answer];
};
const start = () => logics(description, game());
start();
export default { start, game };

