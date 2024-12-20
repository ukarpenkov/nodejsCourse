const https = require('follow-redirects').https
const request = require('request')
const awaitRequest = require('async-request')

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
// ex_02()

async function ex_03() {
    let data = await awaitRequest(
        'https://jsonplaceholder.typicode.com/todos/1',
        {
            method: 'GET',
            // headers: {
            //     apikey: 'C52A7D86316ccA8B',
            // },
        }
    )
    data = JSON.parse(data.body)
    console.log(data)
}
// ex_03()

async function ex_04() {
    let data = awaitRequest('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        data: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    // data = JSON.parse(body)
    console.log(data.body)
}

ex_04()
