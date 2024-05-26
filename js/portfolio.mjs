import { Money } from "./money.mjs";

export class Portfolio {
  constructor() {
    this.moneys = [];
  }
  add(...moneys) {
    this.moneys = this.moneys.concat(moneys);
  }
  evaluate(bank, currency) {
    let failures = [];
    let total = this.moneys.reduce((sum, money) => {
      try {
        let convertedAmount = bank.convert(money, currency);
        return sum + convertedAmount.amount;
      } catch (error) {
        failures.push(error.message);
        return sum;
      }
    }, 0);
    if (!failures.length) {
      return new Money(total, currency);
    }
    throw new Error("Missing exchange rate(s):[" + failures.join() + "]");
  }
}
