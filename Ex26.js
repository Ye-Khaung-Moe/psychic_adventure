const add = (a,b) => {
    let aDigit = a.split("").reverse()
    let bDigit = b.split("").reverse()
    let result = []
    let carry = 0

    let maxLength = Math.max(aDigit.length, bDigit.length)
    for(let i = 0; i < maxLength; i++){
        let val1 = parseInt(aDigit[i] || 0, 10)
        let val2 = parseInt(bDigit[i] || 0, 10)
        let sum = val1 + val2 + carry

        result.push(sum % 10) 
        carry = Math.floor(sum / 10)
    }

    if (carry > 0){
        result.push(carry)
    }

    return result.reverse().join("")
}

console.log(add("888", "222"))