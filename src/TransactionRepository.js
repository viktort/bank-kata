const Transaction = require('./Transaction')

class TransactionRepository {
  constructor (clock) {
    this.clock = clock
    this.transactions = []
  }

  addDeposit (amount) {
    const depositTransaction = new Transaction(this.clock.todayAsString(), amount)
    this.transactions.push(depositTransaction)
  }

  addWithdrawal (amount) {
    const withdrawalTransaction = new Transaction(this.clock.todayAsString(), -amount)
    this.transactions.push(withdrawalTransaction)
  }

  allTransactions () {
    return this.transactions
  }
}

module.exports = TransactionRepository
