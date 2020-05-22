const sinon = require('../sandbox')
const Transaction = require('../../src/Transaction')
const TransactionRepository = require('../../src/TransactionRepository')
const Clock = require('../../src/Clock')

describe('Transaction repository', () => {
  let transactionRepository
  const clock = new Clock()
  const TODAY = '19/05/2020'

  beforeEach(() => {
    sinon.stub(clock, 'todayAsString').returns(TODAY)
    transactionRepository = new TransactionRepository(clock)
  })

  it('should store a deposit transaction', () => {
    transactionRepository.addDeposit(100)

    const transactions = transactionRepository.allTransactions()
    expect(transactions.length).to.equal(1)
    expect(transactions[0]).to.deep.equal(_transaction(TODAY, 100))
  })

  it('should create and store a withdrawal transaction', () => {
    transactionRepository.addWithdrawal(100)

    const transactions = transactionRepository.allTransactions()
    expect(transactions.length).to.equal(1)
    expect(transactions[0]).to.deep.equal(_transaction(TODAY, -100))
  })

  const _transaction = (date, amount) => {
    return new Transaction(date, amount)
  }
})
