import { cleanNumbers } from './util/numbers.js';

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function calculateResult(numbers) {
  let result = '';
  try {
    const cleanedNumbers = cleanNumbers(numbers);

    result = add(cleanedNumbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}
