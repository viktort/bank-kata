const sandbox = require('../sandbox')
const Console = require('../../src/Console')
const Clock = require('../../src/Clock')
const Account = require('../../src/Account')
const TransactionRepository = require('../../src/TransactionRepository')
const StatementPrinter = require('../../src/StatementPrinter')

describe('Test Print Statement feature', () => {
  let spy
  const console = new Console()
  const clock = new Clock()
  const transactionRepository = new TransactionRepository(clock)
  const statementPrinter = new StatementPrinter(console)
  const account = new Account(transactionRepository, statementPrinter)

  beforeEach(() => {
    spy = sandbox.stub(console, 'printLine')
  })

  it('should print statement in expected format', () => {
    const clockStub = sandbox.stub(clock, 'todayAsString')
    clockStub.onCall(0).returns('10/01/2012')
    clockStub.onCall(1).returns('13/01/2012')
    clockStub.onCall(2).returns('14/01/2012')

    account.deposit(1000)
    account.deposit(2000)
    account.withdraw(500)

    account.printStatement()

    expect(spy.firstCall).to.have.been.calledWith('Date || Amount || Balance')
    expect(spy.secondCall).to.have.been.calledWith('14/01/2012 || -500 || 2500')
    expect(spy.thirdCall).to.have.been.calledWith('13/01/2012 || 2000 || 3000')
    expect(spy.lastCall).to.have.been.calledWith('10/01/2012 || 1000 || 1000')
  })
})
