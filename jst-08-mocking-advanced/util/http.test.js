import { it, describe, expect, vi } from 'vitest';
import { HttpError } from './errors';
import { sendDataRequest } from './http';

const testResponseData = {
  id: 'test-id',
  title: 'test-title',
  content: 'test-content',
};

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      reject(new Error('Not a string'));
    }

    const testResponse = {
      ok: true,
      status: 200,
      json: () => Promise.resolve(testResponseData),
    };

    resolve(testResponse);
  });
});

vi.stubGlobal('fetch', testFetch);

describe('sendDataRequest', async () => {
  it('should return any available response data', () => {
    const testData = {
      id: 'test-id',
      title: 'test-title',
      content: 'test-content',
    };

    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
  });

  it('should convert the provided data to json before sending request', async () => {
    const testData = {
      id: 'test-id',
      title: 'test-title',
      content: 'test-content',
    };

    let errorMessage;
    try {
      await sendDataRequest(testData);
    } catch (error) {
      errorMessage = error;
    }

    expect(errorMessage).not.toBe('Not a string');
  });

  it('should throw an http-error if the response is not ok', async () => {
    const testData = {
      id: 'test-id',
      title: 'test-title',
      content: 'test-content',
    };

    testFetch.mockImplementationOnce((url, options) => {
      return new Promise((resolve, reject) => {
        if (typeof options.body !== 'string') {
          reject(new Error('Not a string'));
        }

        const testResponse = {
          ok: false,
          status: 200,
          json: () => Promise.resolve(testResponseData),
        };

        resolve(testResponse);
      });
    });

    let errorMessage = '';
    try {
      await sendDataRequest(testData);
    } catch (error) {
      errorMessage = error;
    }

    expect(errorMessage).toBeInstanceOf(HttpError);
    expect(testFetch).toBeCalledTimes(3);
    expect(errorMessage.message).toBe('Sending the request failed.');
  });
});
