require('should')
const abs = require('../lib/abs')

describe('abs.js', function () {
  it('abs', function () {
    const number = abs(-1)
    number.should.equal(1)
  })
})
