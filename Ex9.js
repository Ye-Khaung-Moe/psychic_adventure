/*
const countBits = (n) => {
    count = 0
    bitnum = n.toString(2)
    for( let i = 0; i < bitnum.length; i++){
        if(bitnum[i] === '1'){
            count += 1
        }
    }
    return count
} */

const countBits = (n) => n.toString(2).split('0').join('').length;

console.log(countBits(1234))