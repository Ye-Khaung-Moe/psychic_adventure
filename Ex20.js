/*
const correct = (string) => {
    newArr = string.split("");
    for(let i =0; i < newArr.length; i++){
        if(newArr[i] === '5') newArr[i] = 'S';
        if(newArr[i] === '0') newArr[i] = 'O';
        if(newArr[i] === '1') newArr[i] = 'I';
    }
    return newArr.join("");
}
*/
const correct = (string) => {
    return string
    .replace(/5/g, 'S')
    .replace(/0/g, 'O')
    .replace(/1/g, 'I')
}  

console.log(correct("L0ND0N"))