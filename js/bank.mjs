import { Money } from "./money.mjs";
export class Bank {
  constructor() {
    this.exchangeRates = new Map();
  }
  addExchangeRate(currencyFrom, currencyTo, rate) {
    let key = currencyFrom + "->" + currencyTo;
    this.exchangeRates.set(key, rate);
  }
  convert(money, currency) {
    let currencyFrom = money.currency;
    let currencyTo = currency;
    if (currencyFrom === currencyTo) {
      return money;
    }
    let key = currencyFrom + "->" + currencyTo;
    let rate = this.exchangeRates.get(key);
    if (rate === undefined) {
      throw new Error(key);
    }
    let convertedAmount = new Money(money.amount * rate, currency);
    return convertedAmount;
  }
}
