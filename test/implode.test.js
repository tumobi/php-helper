require('should')
const implode = require('../lib/implode')

describe('implode.js', function () {
  it('implode', function () {
    const string = implode(',', ['a', 'b', 'c', 1])
    string.should.equal('a,b,c,1')
  })
})
