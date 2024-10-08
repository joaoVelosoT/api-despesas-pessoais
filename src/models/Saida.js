const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
 
const Saida = sequelize.define('saida', {
    valor : {
        type : DataTypes.DOUBLE,
        allowNull : false
    },
    descricao : {
        type : DataTypes.STRING(255)
    }
})

module.exports = Saida;