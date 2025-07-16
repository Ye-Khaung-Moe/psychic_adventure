const findAverage = (array) => {
    let total = 0;
    let avg = 0;

    if(array.length <= 0){
        total
    }else {
        for(let i = 0; i < array.length; i++){
        total += array[i]
    }
        avg = total / array.length;
    } 
    return avg
}

console.log(findAverage([]))