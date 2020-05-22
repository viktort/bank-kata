class Transaction {
  constructor (date, amount) {
    this._date = date
    this._amount = amount
  }

  get date () {
    return this._date
  }

  get amount () {
    return this._amount
  }
}

module.exports = Transaction
