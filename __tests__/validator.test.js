import Validator from '../src/validator';

describe('Validator', () => {
  test('valid usernames', () => {
    expect(Validator.validateUsername('username')).toBe(true);
    expect(Validator.validateUsername('user-name')).toBe(true);
    expect(Validator.validateUsername('user_name')).toBe(true);
    expect(Validator.validateUsername('user123name')).toBe(true);
  });

  test('invalid usernames', () => {
    expect(Validator.validateUsername('1username')).toBe(false);
    expect(Validator.validateUsername('username1')).toBe(false);
    expect(Validator.validateUsername('-username')).toBe(false);
    expect(Validator.validateUsername('username-')).toBe(false);
    expect(Validator.validateUsername('_username')).toBe(false);
    expect(Validator.validateUsername('username_')).toBe(false);
    expect(Validator.validateUsername('user1234name')).toBe(false);
    expect(Validator.validateUsername('user@name')).toBe(false);
    expect(Validator.validateUsername('user.name')).toBe(false);
  });
});
