#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import startGame from '../index.js';
import { getRandom, getRandomOperator } from '../function.js';

const calculate = (number1, number2, oper) => {
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
  const operator = getRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(number1, number2, operator).toString();
  return [question, answer];
};
const start = () => startGame(description, game);

export default start;
