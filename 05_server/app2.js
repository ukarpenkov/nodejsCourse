const http = require('http')

http.createServer(function (req, res) {
    console.log(req.url)
    console.log(req.method)
    console.log('server work')
    res.setHeader('Content-Type', 'text/html; charset=utf-8;')
    res.write('<h1 style="color:red">Hello</h1>')
    res.write('<h2 style="color:green">World</h2>')
    res.end()
}).listen(3500)
