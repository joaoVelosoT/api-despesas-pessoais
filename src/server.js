require('dotenv').config
const express = require('express');
const sequelize = require('./config/database');
const router = require('./routers/router');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/', router);

app.get('/healthcheck', (req,res) => {
    res.status(200).json({
        msg : 'Está tudo funcionando'
    })
})

sequelize.authenticate()
.then(async () => {
    console.log("Conexão com o banco de dados bem sucedida");
    await sequelize.sync()
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Rodando na porta ${PORT}`)
    })
})
.catch((err) => {
    console.log("Erro ao conectar com o banco de dados", err)
})

