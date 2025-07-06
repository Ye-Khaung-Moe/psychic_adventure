const factorial = (digit) => {
    let i = 1; 
    let num = 2;

    while (i > num){
        num = digit * i;
        i++;
    }
    return num
}

console.log(factorial(5))