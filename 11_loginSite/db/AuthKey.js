const Sequilize = require('sequelize')

module.exports = function (sequilize) {
    return sequilize.define(
        'AuthKey',
        {
            authKey: {
                type: Sequilize.STRING(100),
                primaryKey: true,
            },
            userid: {
                type: Sequilize.INTEGER(100),
            },
            created_at: {
                type: Sequilize.INTEGER(100),
                defaultValues: Math.floor(Date.now() / 100),
            },
            updated_at: {
                type: Sequilize.INTEGER(100),
                defaultValues: Math.floor(Date.now() / 100),
            },
        },
        {
            timestamp: false,
            tableName: 'authKey',
        }
    )
}
