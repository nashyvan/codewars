function factorial(n) {
  let result = 1
  if (n > 1) {
    for (let i = 1; i <= n; i++) {
      result = result * i
    }
    return result
  } else if (n === 0 || n === 1) {
    return result
  }
}