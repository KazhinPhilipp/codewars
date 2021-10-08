export class Kata {
  static validatePin(pin: string): boolean {
    return new RegExp(/^(\d{4}|\d{6})$/gi).test(pin);
  }
}
