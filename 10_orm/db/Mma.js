const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    return sequelize.define(
        'rating',
        {
            id: {
                type: Sequelize.INTEGER(11),
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING(100),
            },
            country: {
                type: Sequelize.STRING(9),
            },
            ufc: {
                type: Sequelize.TINYINT(3),
            },
            mma: {
                type: Sequelize.TINYINT(3),
            },
            matrix: {
                type: Sequelize.TINYINT(3),
            },
        },
        {
            timestamps: false,
            tableName: 'rating',
        }
    )
}
