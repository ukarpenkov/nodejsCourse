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

function f04() {
    const pathToFile = './files/info.dat'
    console.log(path.basename(pathToFile))
    console.log(path.dirname(pathToFile))
    console.log(path.extname(pathToFile))
    console.log(path.parse(pathToFile))
}
// f04()

function f05() {
    const pathToDir = './files'
    const allFiles = fs.readdirSync(pathToDir)
    console.log(allFiles)
    let out = ''
    allFiles.forEach((i) => (out += i + '\n'))
    console.log(out)
}
// f05()
const dirPath = path.join(__dirname, 'files')
console.log('-> ', dirPath)
function f06() {
    const pathToDir = './files'
    const allFiles = fs.readdirSync(pathToDir)
    console.log(allFiles)
    let out = ''
    allFiles.forEach((i) => (out += i + '\n'))
    console.log(out)
}
// f06()
