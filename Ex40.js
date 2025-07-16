const enough = (cap, on, wait) => {
    const available = cap - on 
    return available >= wait ? 0 : wait - available
}

console.log(enough(10,5,5))