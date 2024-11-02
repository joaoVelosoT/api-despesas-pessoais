const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const transacaoSchema = new Schema({
    valor : {
        type : Number,
        required : true
    },
    descricao : {
        type : String
    },
    tipo : {
        type : String,
        required : true
    },
    user_id : {
        type : String,
        required : true
    }
})
const Transacao = mongoose.model('Transacao', transacaoSchema);
module.exports = Transacao;




// const {DataTypes} = require('sequelize');
// const sequelize = require('../config/database');
// const User = require('./User');

// const Transacao = sequelize.define("transacao", {
//     valor : {
//         type : DataTypes.DOUBLE,
//         allowNull : false
//     },
//     descricao : {
//         type : DataTypes.STRING(255)
//     },
//     tipo : {
//         type : DataTypes.STRING,
//         allowNull : false
//     },
//     // user_id : {
//     //     type : DataTypes.INTEGER,
//     //     references : {
//     //         model
//     //     }
//     //     onDelete : 'CASCADE',
//     //     allowNull : false
//     // }
// })

// Transacao.belongsTo(User, {
//     foreignKey : 'user_id',
//     onDelete : 'CASCADE',
//     allowNull : false
// })




// module.exports = Transacao;