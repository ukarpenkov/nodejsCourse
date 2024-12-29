const Sequelize = require('sequelize')

const sequelize = new Sequelize('db_01', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    logging: false,
})

const Mma = require('./Mma')(sequelize)

module.exports = {
    sequelize: sequelize,
    rating: Mma,
}
