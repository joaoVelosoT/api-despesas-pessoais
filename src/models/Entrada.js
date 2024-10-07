const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Entrada = sequelize.define("entrada", {
    valor : {
        type : DataTypes.DOUBLE,
        allowNull : false
    },
    descricao : {
        type : DataTypes.STRING(255)
    },
})


module.exports = Entrada;