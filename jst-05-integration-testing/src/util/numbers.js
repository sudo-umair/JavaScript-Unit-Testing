import { validateNumber, validateStringNotEmpty } from './validation.js';

export function transformToNumber(value) {
  if (!value) {
    throw new Error('No value passed in the function');
  }
  return +value;
}

export function cleanNumbers(numberValues) {
  const numbers = [];
  for (const numberValue of numberValues) {
    validateStringNotEmpty(numberValue);
    const number = transformToNumber(numberValue);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
