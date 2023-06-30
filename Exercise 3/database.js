const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Exercise3', 'root', 'Rehaan031211', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;