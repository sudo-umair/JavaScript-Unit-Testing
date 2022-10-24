import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io.js';

vi.mock('fs');

//vi.mock('path');

// can also provide a mock implementation
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => args[args.length - 1],
    },
  };
});

it('should execute the writeFile method with correct arguments', async () => {
  const testData = 'test data';
  const testFileName = 'test.txt';

  writeData(testData, testFileName);
  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});

it('should execute the writeFile method', async () => {
  const testData = 'test data';
  const testFileName = 'test.txt';

  const result = writeData(testData, testFileName);

  expect(result).resolves.toBeUndefined();
});

it('should return a promise that resolved to no value if called correctly', async () => {
  const testData = 'test data';
  const testFileName = 'test.txt';

  const result = writeData(testData, testFileName);

  expect(result).resolves.toBeUndefined();
});
