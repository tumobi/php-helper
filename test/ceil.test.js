require('should')
const ceil = require('../lib/ceil')

describe('ceil.js', function () {
  it('ceil', function () {
    const number = ceil(1.2)
    number.should.equal(2)
  })
})
