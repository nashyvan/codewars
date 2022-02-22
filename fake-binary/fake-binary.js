function fakeBin(x) {
  let m = ''
  
  for (i = 0; i < x.length; i++) {
    if (x[i] < '5') {
      m += '0'
    } else if (x[i] >= '5') {
      m += '1'
    }
  }
  
  return m
}