const mysql = require('mysql')
const CONFIG = require('./config')

function t01() {
    const connection = mysql.createConnection(CONFIG)
    connection.connect()

    let query = 'SELECT * FROM `rating`'
    connection.query(query, function (error, result) {
        // console.log(result)
        result.forEach((item) => console.log(item.name))
    })
    connection.end()
}

t01()
