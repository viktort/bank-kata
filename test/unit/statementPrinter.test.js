const sandbox = require('../sandbox')
const StatementPrinter = require('../../src/StatementPrinter')
const Console = require('../../src/Console')
const Transaction = require('../../src/Transaction')

describe('Test Statement Printer', () => {
  let spy
  const console = new Console()
  const statementPrinter = new StatementPrinter(console)
  const NO_TRANSACTIONS = []
  beforeEach(() => {
    spy = sandbox.stub(console, 'printLine')
  })

  context('When called with no transactions', () => {
    it('should print statement header', () => {
      statementPrinter.print(NO_TRANSACTIONS)

      expect(console.printLine).to.have.been.calledWith('Date || Amount || Balance')
    })
  })

  context('when making multiple transactions', () => {
    it('should print statement with transactions in chronological order', () => {
      const transactions = transactionsContaining(
        deposit('10/01/2012', 1000),
        deposit('13/01/2012', 2000),
        withdrawal('14/01/2012', 500)
      )

      statementPrinter.print(transactions)

      expect(spy.firstCall).to.have.been.calledWith('Date || Amount || Balance')
      expect(spy.secondCall).to.have.been.calledWith('14/01/2012 || -500 || 2500')
      expect(spy.thirdCall).to.have.been.calledWith('13/01/2012 || 2000 || 3000')
      expect(spy.lastCall).to.have.been.calledWith('10/01/2012 || 1000 || 1000')
    })

    const deposit = (date, amount) => {
      return new Transaction(date, amount)
    }

    const withdrawal = (date, amount) => {
      return new Transaction(date, -amount)
    }

    const transactionsContaining = (...transactions) => {
      return transactions
    }
  })
})
