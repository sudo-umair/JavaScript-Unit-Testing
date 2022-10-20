import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a string number to a number type number', () => {
  const value = '1';

  const result = transformToNumber(value);

  const expectedResult = +value;
  expect(result).toBe(expectedResult);
});

it('should transform a string number to a number type', () => {
  const value = '1';

  const result = transformToNumber(value);

  expect(result).toBeTypeOf('number');
});

it('should yield NaN for non transferable values', () => {
  const value = 'invalid';
  const value2 = { number: 12 };

  const result = transformToNumber(value);
  const result2 = transformToNumber(value2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});

it('should throw error if no value is passed in the function', () => {
  const result = () => transformToNumber();

  expect(result).toThrow(/No value passed/);
});
