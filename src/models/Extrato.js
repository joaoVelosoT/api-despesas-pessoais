// const {DataTypes} = require('sequelize');
// const sequelize = require('../config/database');
// const Entrada = require('./Transicao');
// const Saida = require('./Saida');

// const Extrato = sequelize.define('extrato', {
//     // entrada_id : {
//     //     type : DataTypes.INTEGER,
//     //     onDelete : 'CASCADE',
//     //     references : {
//     //         model : Entrada,
//     //         key : "id"
//     //     }
//     // },
//     // saida_id : {
//     //     type : DataTypes.INTEGER,
//     //     onDelete : 'CASCADE',
//     //     references : {
//     //         model : Saida,
//     //         key : "id"
//     //     }
//     // },
// })

// Extrato.belongsTo(Entrada, {
//     foreignKey : 'entrada_id',
//     onDelete : 'CASCADE'
// })


// Extrato.belongsTo(Saida, {
//     foreignKey : 'saida_id',
//     onDelete : 'CASCADE'
// })

// module.exports = Extrato;
