const bouncingBall = (h, bounce, window) => {
    let count = 1
    if( h <= 0 || bounce >= 1 || bounce <= 0 || window >= h){
        return -1 //throw error
    }
    while ((h = h*bounce) > window){
        count += 2
    } 
    return count
}

console.log(bouncingBall(30.0, 0.66, 1.5))