import { it, expect, beforeAll, beforeEach, afterAll, afterEach } from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com';
const newTestEmail = 'test2@test.com';
let user;

// hooks are executed in the order they are defined

beforeAll(() => {
  console.log('beforeAll');
});
beforeEach(() => {
  console.log('beforeEach');
  user = new User(testEmail);
});
afterEach(() => {
  console.log('afterEach');
  // user = new User(testEmail);
});
afterAll(() => {
  console.log('afterAll');
});

// .concurrent() is used to run the test in parallel
// can be used with 'it' or 'describe'

it.concurrent('should update the email', () => {
  user.updateEmail(newTestEmail);
  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {
  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  user.clearEmail();
  expect(user).toHaveProperty('email');
});
