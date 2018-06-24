require('should')
const strlen = require('../lib/strlen')

describe('strlen.js', function () {
  it('strlen', function () {
    const number = strlen('abc长度2')
    number.should.equal(6)
  })
})
