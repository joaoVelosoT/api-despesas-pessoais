const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Transicao = sequelize.define("transicao", {
    valor : {
        type : DataTypes.DOUBLE,
        allowNull : false
    },
    descricao : {
        type : DataTypes.STRING(255)
    },
    tipo : {
        type : DataTypes.STRING,
        allowNull : false
    }
})


module.exports = Transicao;