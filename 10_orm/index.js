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

// t01()

async function t02() {
    const result = await Mma.findAll()
    console.log(result[3])
}

// t02()

async function t03() {
    // let result = await Mma.findOne({
    //     where: { name: 'ЛИС' },
    // })
    // let result = await Mma.findAll({
    //     where: { name: 'ЛИС' },
    // })
    // let result = await Mma.findAll({
    //     where: { name: 'ЛИС', country: 'en' },
    //     attributes: ['id'],
    // })
    // console.log(result[0]['id'])
    let result = await Mma.findOne({
        where: { country: 'en' },
        attributes: ['id'],
    })
    console.log(result['id'])
}
t03()
