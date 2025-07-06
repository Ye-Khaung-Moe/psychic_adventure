const binaryArrayToNumber = (arr) => {
    let newStr = arr.join("")
    return parseInt(newStr, 2)
}

console.log(binaryArrayToNumber([0, 0, 1, 0]))