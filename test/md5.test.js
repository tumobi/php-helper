require('should')
const md5 = require('../lib/md5')

describe('md5.js', function () {
  it('md5', function () {
    const str = md5(123456)
    str.should.equal('e10adc3949ba59abbe56e057f20f883e')
  })

  it('md5 raw_output = true', function () {
    const str = md5(123456, true)
    str.should.equal('49ba59abbe56e057')
  })
})
