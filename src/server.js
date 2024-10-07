require('dotenv').config
const express = require('express');
const sequelize = require('./config/database');
const router = require('./routers/router');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use('/', router);

sequelize.authenticate()
.then(async () => {
    console.log("Conexão com o banco de dados bem sucedida");
    await sequelize.sync()
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Running in port ${PORT}`)
    })
})
.catch((err) => {
    console.log("Error in connecting to the database", err)
})

