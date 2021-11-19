function lastDigit(n, d) {
  n = n.toString()
  if (d > n.length) {
    d = n.length
  }
  return n.slice(n.length - d).split('').map(Number)
}