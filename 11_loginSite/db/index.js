const Sequelize = require('sequelize')

const sequelize = new Sequelize('db_01', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    logging: false,
})

const User = require('./User')(sequelize)
const AuthKey = require('./AuthKey')(sequelize)

module.exports = {
    sequelize: sequelize,
    user: User,
    authKey: AuthKey,
}
