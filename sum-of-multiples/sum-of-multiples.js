const sumMul = (n, m) => {
  const multiples = []
  let sum = 0
  
  if (n > 0 && m > 0 && n != 0 && m != 0) {
    for (let i = 2; i < m; i++) {
      if (i % n === 0) {
        multiples.push(i)
      }
    }
    for (let i = 0; i < multiples.length; i++) {
      sum += multiples[i]
    }
    return sum
  } else {
    return 'INVALID'
  }
}