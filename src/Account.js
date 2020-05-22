class Account {
  constructor (transactionRepository, statementPrinter) {
    this.transactionRepository = transactionRepository
    this.statementPrinter = statementPrinter
  }

  deposit (amount) {
    this.transactionRepository.addDeposit(amount)
  }

  withdraw (amount) {
    this.transactionRepository.addWithdrawal(amount)
  }

  printStatement () {
    this.statementPrinter.print(this.transactionRepository.allTransactions())
  }
}

module.exports = Account
