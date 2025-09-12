const sumStr = (a,b) => {
    const num1 = a === "" ? 0 : Number(a)
    const num2 = b === "" ? 0 : Number(b)

    const result = num1 + num2

    return String(result)
}

console.log(sumStr("4","5"))