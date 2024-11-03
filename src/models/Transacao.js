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
