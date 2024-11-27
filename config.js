const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('catalogo_disco', 'postgres', '07032005', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
