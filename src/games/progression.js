#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { getRandom } from '../function.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (number, length, skip) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(number + i * skip);
  }
  return progression;
};

const game = () => {
  const length = 10;
  const number = getRandom(1, 100);
  const quest = getRandom(1, 10);
  const skip = getRandom(1, 5);
  const progression = getProgression(number, length, skip);
  progression[quest] = '..';
  const question = progression.join(' ');
  const answer = (number + quest * skip).toString();

  return [question, answer];
};

const start = () => startGame(description, game);

export default start;
