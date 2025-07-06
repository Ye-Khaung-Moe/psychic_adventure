//const disemvowel = (str) => str.replace(/[aeiou]/gi, '')

const disemvowel = (str) => {
    result = ""
    vowel  = "aeiouAEIOU"
    for (let i = 0; i < str.length; i++){
        if(!vowel.includes(str[i])){
            result += str[i]
        } 
    } return result
}

console.log(disemvowel("This website is for losers LOL!"))