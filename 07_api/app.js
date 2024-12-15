const https = require('follow-redirects').https
const request = require('request')

function ex_01() {
    const options = {
        method: 'GET',
        hostname: 'https://api.itgid.info',
        path: '/api/12/employee/read',
        headers: {
            apikey: 'C52A7D86316ccA8B',
        },
        maxRedirects: 20,
    }

    const req = https.request(options, function (res) {
        let chunks = []
        res.on('data', function (chunk) {
            chunks.push(chunk)
        })
        res.on('error', function (error) {
            console.log(error)
        })
        res.on('end', function () {
            let body = Buffer.concat(chunks)
            console.log(JSON.parse(body.toString()))
        })
    })
    req.end()
}

// ex_01()

function ex_02() {
    const options = {
        method: 'GET',
        url: 'https://api.itgid.info/api/12/employee/read',
        headers: {
            apikey: 'C52A7D86316ccA8B',
        },
    }
    request(options, function (error, res) {
        if (error) {
            console.log('error')
        }
        let data = res.body
        data = JSON.parse(data)
        console.log(data)
    })
}
ex_02()
