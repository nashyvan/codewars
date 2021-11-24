function squareDigits(num) {
  let stringArray = num.toString().split('')
  const squaredArray = stringArray.map(n => n * n)
  return +squaredArray.join('')
}