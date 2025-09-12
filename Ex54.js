const tooMuchScreenTime = (hours) => {
    //Rule 1
    for (let i = 0; i < hours.length; i++){
        if(hours[i] >= 10){
            return true
        }
    }

    //Rule 2
    for (let i = 0; i < hours.length - 2; i++){
        let avg3 = (hours[i] + hours[i+1] + hours[i+2]) / 3
        if( avg3 >= 8){
            return true
        }
    }

    //Rule 3
    let total = 0;
    for(let i = 0; i < hours.length; i++){
        total += hours[i]
    }
    let avg7 = total / hours.length
    if( avg7 >= 6){
        return true
    }

    return false
}

console.log(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]))