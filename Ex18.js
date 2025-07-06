let bmi = (weight,height) => {
    result = weight / (height * height)
    if(result <= 18.5){
        return "Underweight"
    }
    if(result <= 25.0){
        return "Normal"
    }
    if(result <= 30.0){
        return "Overweight"
    }
    if(result > 30.0){
        return "Obese"
    }
}

console.log(bmi(50, 1.80))