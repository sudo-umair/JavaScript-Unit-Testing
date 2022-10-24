import { it, expect, describe } from 'vitest';
import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber', () => {
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
});

describe('cleanNumbers', () => {
  it('should return array of number values if an array of string number values is provided', () => {
    const numbers = ['1', '2', '3'];

    const cleanedNumbers = cleanNumbers(numbers);

    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });

  it('should return array of number values if an array of string number values is provided', () => {
    const numbers = ['1', '2', '3'];

    const cleanedNumbers = cleanNumbers(numbers);

    expect(cleanedNumbers).toEqual([1, 2, 3]);
  });

  it('should throw error if an array with at least one empty string is provided', () => {
    const numbers = ['1', '', '3'];

    const testFn = () => cleanNumbers(numbers);

    expect(testFn).toThrow(/Invalid input/);
  });
});
