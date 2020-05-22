const STATEMENT_HEADER = 'Date || Amount || Balance'

class StatementPrinter {
  constructor (console) {
    this.console = console
    this.runningBalance = 0
  }

  print (transactions) {
    this.console.printLine(STATEMENT_HEADER)
    this.printStatement(transactions)
  }

  printStatement (transactions) {
    transactions
      .map(transaction => {
        return this.statementLine(transaction)
      })
      .reverse()
      .forEach(statementLine => {
        this.console.printLine(statementLine)
      })
  }

  statementLine (transaction) {
    this.runningBalance += transaction.amount
    return `${transaction.date} || ${transaction.amount} || ${this.runningBalance}`
  }
}

module.exports = StatementPrinter
