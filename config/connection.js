const sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.Connection);

module.exports = sequelize;