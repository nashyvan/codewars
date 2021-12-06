function positiveSum(arr) {
  let sum = 0
  let positiveArr = arr.filter(x => x > -1) 
  
  for (let i = 0; i < positiveArr.length; i++) {
     sum += positiveArr[i]
  }
  
  return sum
}