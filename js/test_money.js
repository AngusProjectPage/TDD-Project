const assert = require("assert");

class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }

  divide(divisor) {
    return new Money(this.amount / divisor, this.currency);
  }
}

let fiveDollars = new Money(5, "USD");
let tenDollars = new Money(10, "USD");
assert.deepStrictEqual(fiveDollars.times(2), tenDollars);

let fiveEuro = new Money(5, "EUR");
let tenEuro = new Money(10, "EUR");
assert.deepStrictEqual(fiveEuro.times(2), tenEuro);

let originalMoney = new Money(10, "USD");
let expectedMoney = new Money(5, "USD");
assert.deepStrictEqual(originalMoney.divide(2), expectedMoney);
