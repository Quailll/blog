const { Model, DataTypes } = require('sequelize')
const sequelize = require("../config/connection");

class Users extends Model {}



module.exports = Users;
