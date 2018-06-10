require('should')
const in_array = require('../../lib/array/in_array')

describe('array - in_array.js', function () {
  it('in_array', function () {
    const isIn = in_array(1, [0, 1, 3])
    isIn.should.true()
  })

  it('md5 raw_output = true', function () {
    const isIn = in_array(1, [0, '1', 3], true)
    isIn.should.false()
  })
})
