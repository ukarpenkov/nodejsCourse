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
            let data = fs.readFileSync('./contant.html', {
                encoding: 'utf8',
                flag: 'r',
            })
            res.write(data)
            break
        default:
            console.log('404')
            res.write('<h1 style="color:red">404</h1>')
    }

    res.end()
}).listen(PORT)
