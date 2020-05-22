const sandbox = require('../sandbox')
const Clock = require('../../src/Clock')

describe('Test Clock', () => {
  const clock = new Clock()
  beforeEach(() => {
    sandbox.useFakeTimers(new Date('2020-05-20'))
  })

  it('should return todays data in correct format dd/mm/yyyy', () => {
    const date = clock.todayAsString()

    expect(date).to.equal('20/05/2020')
  })
})
