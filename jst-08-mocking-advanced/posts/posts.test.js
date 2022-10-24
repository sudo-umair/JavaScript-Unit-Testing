import { it, describe, expect, vi } from 'vitest';
import { extractPostData, savePost } from './posts';

const testTitle = 'Test title';
const testContent = 'Test content';

let testFormData = {
  title: testTitle,
  content: testContent,
  get(key) {
    return this[key];
  },
};

describe('extractPostData', () => {
  it('should extract title and content from a provided form data', () => {
    const extractedData = extractPostData(testFormData);

    expect(extractedData.title).toBe(testTitle);
    expect(extractedData.content).toBe(testContent);
  });
});
