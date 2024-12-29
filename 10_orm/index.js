const Sequelize = require('sequelize')
const db = require('./db')
const Mma = db.rating

function t01() {
    Mma.findAll().then((res) => {
        // console.log(res)
        res.forEach((item) => {
            console.log(item.name)
        })
    })
}

t01()
