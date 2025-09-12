const getDivisorsCnt = (n) => {
    let count = 0 
    if (n % Math.sqrt(n) == 0){
        count++
    }
    for (let i = 0; i < Math.sqrt(n); i++){
        if(n % i == 0){
            count +=2
        }
    }
    return count
}

console.log(getDivisorsCnt(4))