#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { getRandom } from '../src/function.js';
import logics from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const evenCheck = (number) => (number % 2 === 0 ? 'yes' : 'no');

const game = () => {
  const question = getRandom(1, 100);
  const answer = evenCheck(question);

  return [question, answer];
};

const start = () => logics(description, game);
start();
export default start;
