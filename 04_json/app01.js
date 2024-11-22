const fs = require('fs')

//read.json
const path = './inq.json'
const data = fs.readFileSync(path, { encoding: 'utf8' })
// console.log(data)
let dataObj = JSON.parse(data)

console.log(dataObj.it_dev_inquiry[0])
