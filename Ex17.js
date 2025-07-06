const past = (h,m,s) => {
    if(h <= 23 && h >= 0 && m <= 59 && m >= 0 && s <= 59 && s >= 0){
        return (h * 3600000) + (m * 60000) + (s * 1000)
    } else{
        return -1 // throw error
    }
}

console.log(past(0,1,1))