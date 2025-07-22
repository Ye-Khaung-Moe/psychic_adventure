const expandedForm = (num) => {
    const numStr = num.toString();
    let result = [];

    for(let i = 0; i < numStr.length; i++){
        const digit = numStr[i]
        if( numStr[i] !== '0'){
            const zero = numStr.length - i - 1
            result.push(digit + '0'.repeat(zero))
        }
    }
    return result.join('+')
}

console.log(expandedForm(198))