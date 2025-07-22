const abbrevName = (name) => {
    const parts = name.split(" ");
    const first = parts[0][0].toUpperCase();
    const second = parts[1][0].toUpperCase();

    return `${first}.${second}`
}

console.log(abbrevName("Ravil Wayne"))
