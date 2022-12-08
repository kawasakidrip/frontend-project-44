#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { getRandom } from '../src/function.js';
import logics from '../src/index.js';

const getGcd = (number1, number2) => (!number2 ? number1 : getGcd(number2, number1 % number2));

const description = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const number1 = getRandom(1, 100);
  const number2 = getRandom(1, 100);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2).toString();

  return [question, answer];
};

const start = () => logics(description, game);
start();
export default start;
