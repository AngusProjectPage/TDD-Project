import unittest
from money import Money 
from portfolio import Portfolio 

class TestMoney(unittest.TestCase):
    def testMultiplication(self):
        fiveEuros = Money(5, "EUR")
        tenEuros = Money(10, "EUR")
        self.assertEqual(tenEuros, fiveEuros.times(2))

    def testDivision(self):
        originalMoney = Money(4002, "KRW")
        expectedMoneyAfterDivision = Money(1000.5, "KRW")
        self.assertEqual(expectedMoneyAfterDivision, originalMoney.divide(4))

    def testPortfolio(self):
        fiveDollars = Money(5, "USD")
        tenDollars = Money(10, "USD")
        fifteenDollars = Money(15, "USD")
        portfolio = Portfolio()
        portfolio.add(fiveDollars, tenDollars)
        self.assertEqual(portfolio.evaluate("USD"), fifteenDollars)

if __name__ == '__main__':
    unittest.main()