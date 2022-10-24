import { it, describe, expect } from 'vitest';
import { ValidationError, HttpError } from './errors';

describe('Class httpError', () => {
  it('should contain the provided http code, message and data', () => {
    const testStatus = 400;
    const testMessage = 'test message';
    const testData = { test: 'data' };

    const testError = new HttpError(testStatus, testMessage, testData);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.data).toBe(testData);
    expect(testError.message).toBe(testMessage);
  });

  it('should contain undefined as data if no data is provided', () => {
    const testStatus = 400;
    const testMessage = 'test message';

    const testError = new HttpError(testStatus, testMessage);

    expect(testError.statusCode).toBe(testStatus);
    // expect(testError.data).toBe(undefined);
    expect(testError.data).toBeUndefined();
    expect(testError.message).toBe(testMessage);
  });
});

describe('Class ValidationError', () => {
  it('should contain the provided message', () => {
    const testMessage = 'test message';

    const testError = new ValidationError(testMessage);

    expect(testError.message).toBe(testMessage);
  });

  it('should contain undefined as data if no data is provided', () => {
    const testMessage = 'test message';

    const testError = new ValidationError(testMessage);

    expect(testError.message).toBe(testMessage);
  });
});
