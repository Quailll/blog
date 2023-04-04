const sequelize = require('sequelize');


const sequelize = process.env.JAWDB_URL
  ? new Sequelize(process.env.JAWDB_URL)
  : new Sequelize(process.env.Connection, {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });

module.exports = sequelize;