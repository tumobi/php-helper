require('should')
const time = require('../lib/time')

describe('time.js', function () {
  it('time', function () {
    const nowTime = time()
    nowTime.should.equal(Math.floor(Date.now() / 1000))
  })
})
