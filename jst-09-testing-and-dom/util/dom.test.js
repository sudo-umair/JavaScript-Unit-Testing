import { it, expect, describe, vi, beforeEach } from 'vitest';
import { Window } from 'happy-dom';
import { showError } from './dom';
import fs from 'fs';
import path from 'path';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocContent = fs.readFileSync(htmlDocPath, 'utf8').toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

describe('DOM', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlDocContent);
  });

  it('should output the provided message in the error paragraph', () => {
    const message = 'Error message';
    showError(message);
    const errorContainerElement = document.getElementById('errors');
    const errorMessageElement = errorContainerElement.querySelector('p');
    expect(errorMessageElement.textContent).toBe(message);
  });

  it('should add an error paragraph to id="errors" paragraph', () => {
    const message = 'Error message';
    showError(message);
    const errorContainerElement = document.getElementById('errors');
    const errorMessageElement = errorContainerElement.firstElementChild;
    expect(errorMessageElement).not.toBe(null);
  });

  it('should not contain an error paragraph initially', () => {
    const errorContainerElement = document.getElementById('errors');
    const errorMessageElement = errorContainerElement.firstElementChild;
    expect(errorMessageElement).toBe(null);
  });
});
