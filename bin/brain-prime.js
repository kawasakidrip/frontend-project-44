#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { getRandom } from '../src/function.js';
import logics from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeCheck = (number) => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number / 2; i += 1) {
        if (number % i) {
        return false;
    };
}
return true
};

const game = () => {
  const question = getRandom(1, 100);
  const answer = primeCheck(question) ? 'yes' : 'no';

  return [question, answer];
};

const start = () => logics(description, game);
start();
export default start;
