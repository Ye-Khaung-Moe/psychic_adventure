//String.fromCharCode
//charCodeAt
const moveCharForward = (str) =>
     str.split('')
     .map( char => {
        let code = char.charCodeAt(0);

        if (code >= 97 && code <= 122){
            code += 1
        if (code > 122) code = 97; 
        }
        return String.fromCharCode(code)
     }).join('');


console.log(moveCharForward('abcd'))