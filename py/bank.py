from money import Money 
class Bank:

    def __init__(self):
        self.exchangeRates = {}

    def addExchangeRate(self, fromCurrency, toCurrency, rate):
        key = fromCurrency + "->" + toCurrency
        self.exchangeRates.update({key:rate})

    def convert(self, money, currency):
        if(money.currency == currency):
            return Money(money.amount, currency)
        key = money.currency + "->" + currency 
        if key in self.exchangeRates:
            return Money(money.amount * self.exchangeRates[key], currency)
        raise Exception(key)