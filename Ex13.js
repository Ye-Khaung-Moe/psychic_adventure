/*
const printerError = (s) => {
    let err_count = 0
    for(let i = 0; i < s.length; i++){
        if(s.charCodeAt(i) > 109){
            err_count += 1
        }
    } return err_count + '/' + s.length
} 
*/

const printerError = (s) => {
    const error = s.split('').filter(item => item > 'm').length;
    return `${error}`+ '/' + s.length
} 

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))