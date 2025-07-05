const GetCurrentDate = (date = new Date()) => {
    const days = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${days}/${month}/${year}`;
}

console.log(GetCurrentDate())