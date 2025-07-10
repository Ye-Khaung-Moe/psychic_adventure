const  alphabetPosition = (text) => {
    if( typeof text != "string") return false

    return text
            .toLowerCase()
            .split("")
            .filter(char => char >= 'a' && char <= 'z')
            .map(char => char.charCodeAt(0) - 96)
            .join(" ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock"))