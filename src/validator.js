export default class Validator {
  static validateUsername(username) {
    const regex = /^(?![0-9_-])[a-zA-Z0-9_-]+(?<![0-9_-])$/;
    const noFourDigits = !/\d{4}/.test(username);
    return regex.test(username) && noFourDigits;
  }
}
