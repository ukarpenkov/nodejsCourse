const http = require('http')
const PORT = 3500

http.createServer(function (req, res) {
    const url = req.url
    console.log(url)
    switch (url) {
        case '/':
            console.log('main page')
            res.write('<h1 style="color:red">Hello</h1>')
            break
        case '/contact':
            console.log('contact')
            res.write('<h1 style="color:red">contact</h1>')
            break
        default:
            console.log('404')
            res.write('<h1 style="color:red">404</h1>')
    }

    res.end()
}).listen(PORT)
