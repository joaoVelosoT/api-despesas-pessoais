const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nome : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    senha : {
        type : String,
        required : true
    },
})
const User = mongoose.model('User', userSchema);

module.exports = User


// const {DataTypes} = require('sequelize');
// const sequelize = require('../config/database');

// const User = sequelize.define('user', {
//     nome : {
//         type : DataTypes.STRING,
//         allowNull : false
//     },
//     email : {
//         type : DataTypes.STRING,
//         allowNull : false,
//         unique : true
//     },
//     senha : {
//         type : DataTypes.STRING,
//         allowNull : false
//     }
// })


// module.exports = User;