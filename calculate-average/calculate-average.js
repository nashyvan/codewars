function find_average(array) {
  if (array.length === 0) {
    return 0
  } else {
    let reducer = (accumulator, curr) => accumulator + curr
    return array.reduce(reducer) / array.length
  }
}