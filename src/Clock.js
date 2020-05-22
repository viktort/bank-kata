const moment = require('moment')
const DDMMyyyy = 'DD/MM/yyyy'

class Clock {
  todayAsString () {
    return moment().format(DDMMyyyy)
  }
}

module.exports = Clock
