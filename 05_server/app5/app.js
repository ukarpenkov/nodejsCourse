const http = require('http')
const fs = require('fs')
const PORT = 3500

http.createServer(function (req, res) {
    const url = req.url
    console.log(url)
    res.setHeader('Content-Type', 'text/html; charset=utf-8;')
    switch (url) {
        case '/':
            console.log('main page')
            res.write('<h1 style="color:red">Hello</h1>')
            break
        case '/contact':
            let data = fs.readFileSync('./public/contant.html', {
                encoding: 'utf8',
                flag: 'r',
            })
            res.write(data)
            break
        default:
            if (url.includes('/images')) {
                console.log('img!!!')
                let data = fs.readFileSync('./public' + url)
                res.setHeader('Content-Type', 'image/png')
                res.write(data)
            } else {
                console.log('404')
                res.write('<h1 style="color:red">404</h1>')
            }
    }

    res.end()
}).listen(PORT)
