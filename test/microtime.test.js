require('should')
const microtime = require('../lib/microtime')

describe('microtime.js', function () {
  it('microtime', function () {
    const nowTime = microtime()
    nowTime.split(' ')[1].should.equal(Math.floor(Date.now() / 1000) + '')
  })

  it('microtime get_as_float = true', function () {
    const nowTime = microtime(true)
    nowTime.should.equal((Date.now() / 1000).toFixed(4))
  })
})
