module.exports = function (get_as_float = false) {
  const now = Date.now()
  if (get_as_float) {
    return (now / 1000).toFixed(4)
  }
  const second = Math.floor(now / 1000)
  const microsecond = now % 1000 / 1000
  return microsecond.toFixed(8) + ' ' + second
}
