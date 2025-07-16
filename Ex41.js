const twoSum = (numbers, target) => {
    for(let i = 0; i < numbers.length; i++){
        for(let seci = i + 1; seci < numbers.length; seci++){
            if(numbers[i] + numbers[seci] === target){
                return[i, seci]
            }
        }
    }
}

console.log(twoSum([1, 2, 3], 4))