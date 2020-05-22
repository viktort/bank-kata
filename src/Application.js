const Account = require('./Account')
const TransactionRepository = require('./TransactionRepository')
const StatementPrinter = require('./StatementPrinter')
const Clock = require('./Clock')
const Console = require('./Console')

class Application {
  main () {
    const clock = new Clock()
    const transactionRepository = new TransactionRepository(clock)
    const console = new Console()
    const statementPrinter = new StatementPrinter(console)
    const account = new Account(transactionRepository, statementPrinter)

    account.deposit(1000)
    account.deposit(2000)
    account.withdraw(500)

    account.printStatement()
  }
}

new Application().main()

module.exports = { Application }
