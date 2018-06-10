const md5 = require('./md5')
const sha1 = require('./sha1')
const json = require('./json')
const math = require('./math')
const array = require('./array')

module.exports = {
  md5,
  sha1,
  ...json,
  ...math,
  ...array
}
