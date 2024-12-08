const http = require('http')
const fs = require('fs')

const PORT = process.env.PORT
const HOSTNAME = process.env.HOSTNAME

http.createServer(function (req, res) {
    const url = req.url
    console.log(url)

    switch (url) {
        case '/':
            console.log('MAIN')
            res.write('<h1>MAIN</h1>')
            break
        case '/contact':
            console.log('CONTACNTS')
            staticFileSync(
                res,
                '/contant.html',
                { encoding: 'utf8', flag: 'r' },
                '.html'
            )
            break
        default:
            res.statusCode = 404
            console.log('404')
    }
    res.end()
}).listen(PORT, HOSTNAME)
