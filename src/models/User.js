const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
    nome : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    senha : {
        type : DataTypes.STRING,
        allowNull : false
    }
})


module.exports = User;