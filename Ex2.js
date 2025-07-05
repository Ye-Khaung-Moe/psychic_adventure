const getFileExtension = (str) => str.slice(str.lastIndexOf('.'))

console.log(getFileExtension('index.html'))
console.log(getFileExtension('web.config.js'))