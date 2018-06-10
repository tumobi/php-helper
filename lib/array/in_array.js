module.exports = function (needle, haystack, strict = false) {
  if (!Array.isArray(haystack)) {
    return false
  }

  if (!haystack.includes(needle)) {
    return false
  }

  if (!strict) {
    return true
  }

  for (const item of haystack) {
    if (item === needle) {
      return true
    }
  }

  return false
}
