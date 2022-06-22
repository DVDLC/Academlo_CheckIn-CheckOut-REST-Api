const { Sequelize, DataTypes } = require("sequelize");


const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '008891',
    port: 5432,
    database: 'CheckIn-Checkout',
    logging: false
})

module.exports = { db, DataTypes }