import { it, expect } from 'vitest';
import { add } from './math';

it('should summarize all number values in an array', () => {
  //Arrange
  const numbers = [1, 2, 3];
  //Act
  const result = add(numbers);
  //Assert
  const expectedResult = numbers.reduce(
    (previous, current) => previous + current,
    0
  );
  expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid input is provided', () => {
  const numbers = ['invalid', 2];

  const result = add(numbers);

  expect(result).toBeNaN();
});

it('should yield the correct sum if an array of string numeric values is provided', () => {
  const numbers = ['1', '2', '3'];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (previous, current) => +previous + +current,
    0
  );

  expect(result).toBe(expectedResult);
});

it('should yield zero if an empty array is provided', () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it('should yield zero if no value is passed in the function', () => {
  const result = () => add();

  expect(result).toThrow(/is not iterable/);
});

it('should throw an error if provided with multiple values instead of an array', () => {
  const num1 = 1;
  const num2 = 2;

  const result = () => add(num1, num2);

  expect(result).toThrow(/is not iterable/);
});

it('should throw an error if provided with an object instead of an array', () => {
  const numbers = {};

  const result = () => add(numbers);

  expect(result).toThrow(/numbers is not iterable/);
});
