const fs = require('fs')
const { type } = require('os')

// read file
const pathToFile = 'files/info.txt'
const data = fs.readFileSync(pathToFile, { encoding: 'utf-8', flag: 'r' })
console.log(data)
console.log(typeof data)

//split
let dataArr = data.split('\r\n').filter(Boolean)
console.log(dataArr)
