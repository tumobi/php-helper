require('should')
const json_encode = require('../lib/json_encode')

describe('json_encode.js', function () {
  it('json_encode', function () {
    const str = json_encode({'name': 'your name', 'age': 11})
    str.should.equal('{"name":"your name","age":11}')
  })
})
