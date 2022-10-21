import { it, expect, describe } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a jwt token', (done) => {
  const inputEmail = 'muhammadumair@gmail.com';

  generateToken(inputEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      done();
    } catch (error) {
      done(error);
    }
  });
});

it('should generate a jwt token using promise', () => {
  const inputEmail = 'muhammadumair@gmail';

  expect(generateTokenPromise(inputEmail)).resolves.toBeDefined();
});

it('should generate a jwt token using promise using async/await', async () => {
  const inputEmail = 'muhammadumair@gmail';

  const token = await generateTokenPromise(inputEmail);
  expect(token).toBeDefined();
});
