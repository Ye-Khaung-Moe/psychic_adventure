const highAndLow = (numbers) => {
    const num = numbers.split(" ").map(numbers => Number(numbers))
    const max = Math.max(...num)
    const min = Math.min(...num)

    return `${max} ${min}`
}

console.log(highAndLow("1 2 3 4 5"))