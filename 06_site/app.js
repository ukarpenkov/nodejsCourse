const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const user = require('./users')

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm',
}

function staticFile(res, filePatch, ext) {
    res.setHeader('Content-Type', mimeTypes[ext])
    fs.readFile('./public' + filePatch, (error, data) => {
        if (error) {
            res.statusCode = 404
            res.end()
        }
        res.end(data)
    })
}

http.createServer(function (req, res) {
    let url = req.url
    console.log(url)

    switch (url) {
        case '/':
            console.log('main page')
            staticFile(res, '/html/main.html', '.html')
            break
        case '/about':
            console.log('about')
            staticFile(res, '/html/about.html', '.html')
            break
        case '/contacts':
            console.log('contacts')
            staticFile(res, '/html/contacts.html', '.html')
            break
        case '/admin':
            console.log('admin')
            staticFile(res, '/html/not_admin.html', '.html')
            break
        case '/login':
            console.log('login')
            staticFile(res, '/html/login.html', '.html')
            break
        case '/cabinet':
            console.log('cabinet')
            staticFile(res, '/html/cabinet.html', '.html')
            break
        default:
            const extname = String(path.extname(url)).toLocaleLowerCase()
            if (extname in mimeTypes) {
                staticFile(res, url, extname)
            } else {
                res.statusCode = 404
                res.end()
            }
    }
}).listen(3500)
