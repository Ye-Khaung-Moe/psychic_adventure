const countBy = (x, n) => {
    let z = [];

    for(let i = 1; i <= n; i++){
        z.push(x * i)
    }
    return z 
}
console.log(countBy(2, 5))