const crypto = require('crypto')

module.exports = function (str, raw_output = false) {
  const md5 = crypto.createHash('md5')
  const result = md5.update(str + '').digest('hex')

  // 如果以16字节长度的原始二进制格式返回
  // 截取中间的第 9 位到第 24 位的部分
  if (raw_output) {
    return result.substring(8, 24)
  }
  return result
}
