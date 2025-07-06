/*
const maxSequence = (arr) => {
    let current_sum = 0
    let maxSum = 0
    for(let i = 0; i < arr.length; i++){
        current_sum += arr[i];
     if( current_sum > maxSum) {
        maxSum = current_sum;
    } if( current_sum < 0){
        current_sum = 0;
    }
 } return maxSum;
};
*/

const maxSequence = (arr) => {
    let sum = 0
    let ans = 0
    let min = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
        min = Math.min(sum, min)
        ans = Math.max(ans, sum - min)
    } 
    return ans;
}

console.log(maxSequence([1,2,3,4]))
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

