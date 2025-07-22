/*
const check = (a, x) => {
    for(let i = 0; i < a.length; i++){
        if(a[i] === x){
            return true
        }
    }
    return false
}
*/

const check = (a,x) => a.includes(x);

console.log(check([66, 101], 66))