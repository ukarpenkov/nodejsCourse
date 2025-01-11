const Sequilize = require('sequelize')

module.exports = function (sequilize) {
    return sequilize.define('User', {
        id: {
            type: Sequilize.INTEGER(),
            primaryKey: true,
        },
        email: {
            type: Sequilize.STRING(100),
        },
        password: {
            type: Sequilize.STRING(100),
        },
        created_at: {
            type: Sequilize.INTEGER(100),
            defaultValues: Math.floor(Date.now() / 100),
        },
        updated_at: {
            type: Sequilize.INTEGER(100),
            defaultValues: Math.floor(Date.now() / 100),
        }
    }, {
       timestamp: false,
       tableName: 'user'     
    })
}
