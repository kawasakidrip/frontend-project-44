#!/usr/bin/env node
/* eslint-dasable no-console */
/* eslint-dasable import/extensions */
import readlineSync from 'readline-sync';

const inputName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};
export default inputName;
