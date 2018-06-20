require('should')
const floor = require('../lib/floor')

describe('floor.js', function () {
  it('floor', function () {
    const number = floor(1.6)
    number.should.equal(1)
  })
})
