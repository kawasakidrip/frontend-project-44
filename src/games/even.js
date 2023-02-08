#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { getRandom } from '../function.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const checkEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const game = () => {
  const question = getRandom(1, 100);
  const answer = checkEven(question);

  return [question, answer];
};

const start = () => startGame(description, game);

export default start;
