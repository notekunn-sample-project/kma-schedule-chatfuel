const Sequelize = require("sequelize");
const { database } = require("./")
module.exports = {
    sequelize: new Sequelize({
        ...database,
        dialect: 'postgres',
        operatorsAliases: false,

        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: process.env.NODE_ENV == 'development' ? console.log : false,

        define: {
            underscored: false,
            freezeTableName: true,
            charset: 'utf8',
            dialectOptions: {
                collate: 'utf8_general_ci'
            },
            timestamps: true
        },
        sync: { force: false },

    }),
    Sequelize,
    Op: Sequelize.Op
}