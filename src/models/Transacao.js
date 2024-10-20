const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Transacao = sequelize.define("transacao", {
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
    },
    // user_id : {
    //     type : DataTypes.INTEGER,
    //     references : {
    //         model
    //     }
    //     onDelete : 'CASCADE',
    //     allowNull : false
    // }
})

Transacao.belongsTo(User, {
    foreignKey : 'user_id',
    onDelete : 'CASCADE',
    allowNull : false
})




module.exports = Transacao;