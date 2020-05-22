const sandbox = require('../sandbox')
const Console = require('../../src/Console')

describe('Test Console', () => {
  const ourConsole = new Console()

  beforeEach(() => {
    sandbox.stub(console, 'log')
  })

  it('should call console.log', () => {
    ourConsole.printLine('text')

    expect(console.log).to.have.been.calledWith('text')
  })
})
