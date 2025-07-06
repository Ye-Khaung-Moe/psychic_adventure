const squareDigits = (num) => {
    let result = []
    let digit = String(num).split("")
    for(let i = 0; i < digit.length; i++){
        result.push(digit[i] * digit[i])
    }
    return Number(result.join(""))
}


console.log(squareDigits(9119))