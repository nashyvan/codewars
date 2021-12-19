function bmi(weight, height) {
  let bmiValue = weight / (height * height)
  if (bmiValue <= 18.5) {
    return 'Underweight'
  } else if (bmiValue <= 25.0) {
    return 'Normal'
  } else if (bmiValue <= 30.0) {
    return 'Overweight'
  } else if (bmiValue > 30.0){
    return 'Obese'
  }
}