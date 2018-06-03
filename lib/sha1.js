const crypto = require('crypto')

module.exports = function (str, raw_output = false) {
  const sha1 = crypto.createHash('sha1')
  return sha1.update(str + '').digest('hex')
}
