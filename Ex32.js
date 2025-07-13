const digitize = (n) => {
    const newArr = String(n).split('').map(Number).reverse()
    return newArr
};

console.log(digitize(35231))