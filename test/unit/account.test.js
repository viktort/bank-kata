const sandbox = require('../sandbox')
const TransactionRepository = require('../../src/TransactionRepository')
const Account = require('../../src/Account')
const StatementPrinter = require('../../src/StatementPrinter')

describe('Test Account', () => {
  const transactionRepository = new TransactionRepository()
  const statementPrinter = new StatementPrinter()
  const account = new Account(transactionRepository, statementPrinter)

  beforeEach(() => {
    sandbox.stub(transactionRepository, 'addDeposit')
    sandbox.stub(transactionRepository, 'addWithdrawal')
    sandbox.stub(statementPrinter, 'print')
  })

  it('should deposit transaction', () => {
    account.deposit(100)
    expect(transactionRepository.addDeposit).to.have.been.calledWith(100)
  })

  it('should withdraw', () => {
    account.withdraw(100)
    expect(transactionRepository.addWithdrawal).to.have.been.calledWith(100)
  })

  context('when printing a statement', () => {
    const transactions = []
    beforeEach(() => {
      sandbox.stub(transactionRepository, 'allTransactions').returns(transactions)
    })

    it('should print a statement', () => {
      account.printStatement()
      expect(statementPrinter.print).to.have.been.calledWith(transactions)
    })
  })
})
