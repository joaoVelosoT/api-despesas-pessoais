require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
    try {
        const HOST_DB = process.env.HOST_DB;
        const PASS_DB = process.env.PASS_DB;
        const URL_DB = process.env.URL_DB;
        const uri = `mongodb+srv://${HOST_DB}:${PASS_DB}${URL_DB}/?retryWrites=true&w=majority&appName=Cluster0`;
        await mongoose.connect(uri);
        console.log("DB conectado com sucesso !");
    } catch (error) {
        console.error(error);
    }
}

module.exports = connect;