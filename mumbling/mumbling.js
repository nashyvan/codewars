function accum(s) {
  const result = []
  const toLowerStr = s.toLowerCase()

  for (let i = 0; i < toLowerStr.length; i++) {
    let str = toLowerStr[i].toUpperCase()
    for (let j = 0; j < i; j++) {
      str += toLowerStr[i]
    }
    result.push(str)
  }

  return result.join("-")
}