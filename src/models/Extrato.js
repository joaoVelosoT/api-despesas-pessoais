const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Entrada = require('./entrada');
const Saida = require('./Saida');

const Extrato = sequelize.define('extrato', {
    entrada_id : {
        type : INTEGER,
        onDelete : 'CASCADE',
        references : {
            model : Entrada,
            key : "id"
        }
    },
    saida_id : {
        type : INTEGER,
        onDelete : 'CASCADE',
        references : {
            model : Saida,
            key : "id"
        }
    },
})


module.exports = Extrato;
