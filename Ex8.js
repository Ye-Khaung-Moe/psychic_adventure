const friend = (friends) => {
    let newArr = []
    for (let i = 0; i < friends.length; i++){
        if(friends[i].length === 4){
            newArr.push(friends[i])
        }
    }
    return console.log(newArr)
}

friend(["Ryan", "Kieran", "Jason", "Yous"])
