import { it, describe, expect } from 'vitest';
import { validateNotEmpty } from './validation';

describe('validateNotEmpty', () => {
  it('should throw error if the an empty string is provided', () => {
    const testString = '';

    const testFunction = () => validateNotEmpty(testString);

    expect(testFunction).toThrow();
  });

  it('should throw error if the a string with blanks is provided', () => {
    const testString = '   ';

    const testFunction = () => validateNotEmpty(testString);

    expect(testFunction).toThrow();
  });

  it('should throw error with the provided message if the an empty string is provided', () => {
    const testString = '';
    const testError = 'test error';

    const testFunction = () => validateNotEmpty(testString, testError);

    expect(testFunction).toThrowError(testError);
  });
});
