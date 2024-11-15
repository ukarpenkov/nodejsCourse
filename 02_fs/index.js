const fs = require('fs')
const path = require('path')

//folder exist check
function f01() {
    const pathToDir = './files'
    if (fs.existsSync(pathToDir)) {
        console.log('yes')
    } else {
        console.log('no')
    }
}
// f01()

//check file exist
function f02() {
    const pathToFile = './files/info.dat'
    if (fs.existsSync(pathToFile)) {
        console.log('yes')
    } else {
        console.log('no')
    }
}
// f02()

//file size
function f03() {
    const pathToFile = './files/info.dat'
    const fileInfo = fs.statSync(pathToFile)
    console.log(fileInfo.size)
}
// console.log(f03())
