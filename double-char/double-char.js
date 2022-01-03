function doubleChar(str) {
  return str.split('').map(a => {
    return a + a
  }).join('')
}