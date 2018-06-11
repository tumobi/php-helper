require('should')
const json_decode = require('../lib/json_decode')

describe('json_decode.js', function () {
  it('json_decode', function () {
    const obj = json_decode('{"name":"your name","age":11}')
    obj.name.should.equal('your name')
  })
})
