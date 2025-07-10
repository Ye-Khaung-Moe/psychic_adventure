const getCount = (str) => {
    let vowel = ['a','e','i','o','u']
    let count = 0

    newStr = str.toLowerCase()
    for(let i = 0; i < newStr.length; i++){
         if (vowel.includes(newStr[i])) count += 1
    }return count
}

console.log(getCount('abracadabra'))