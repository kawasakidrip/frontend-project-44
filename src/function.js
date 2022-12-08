#!/usr/bin/env node
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

export { getRandom, getRandomOperator };
