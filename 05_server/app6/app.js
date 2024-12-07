const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 3500

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
    const url = req.url
    console.log(url)

    switch (url) {
        case '/':
            console.log('MAIN')
            res.write('<h1>MAIN</h1>')
            res.end()
            break
        case '/contact':
            console.log('CONTACNTS')
            staticFile(res, '/contant.html', '.html')
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
}).listen(PORT)
