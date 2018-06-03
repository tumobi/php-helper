require('should')
const sha1 = require('../lib/sha1')

describe('sha1.js', function () {
  it('sha1', function () {
    const str = sha1(123456)
    str.should.equal('7c4a8d09ca3762af61e59520943dc26494f8941b')
  })
})
