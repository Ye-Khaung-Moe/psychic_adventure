const summation = (num) => {
    if (num < 0) return false;

    let sum = 0;
    let i = 1;
    while (i <= num) {
        sum += i;
        i++;
    }
    return sum;
}


console.log(summation(8))