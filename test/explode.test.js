require('should')
const explode = require('../lib/explode')

describe('explode.js', function () {
  it('explode', function () {
    const arr = explode('a', 'A123abbCCa')
    arr.length.should.equal(3)
  })
})
