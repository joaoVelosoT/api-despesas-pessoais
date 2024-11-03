require("dotenv").config;
const express = require("express");
// const sequelize = require('./config/database');
const database = require("./config/database");
const router = require("./routers/router");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/", router);

app.get("/healthcheck", (req, res) => {
  res.status(200).json({
    msg: "Está tudo funcionando",
  });
});

app.listen(PORT, async () => {
  try {
    await database();
    console.log("db conectado");
  } catch (error) {
    console.error(error);
  }

  console.log("------------------------------------");
  console.log("servidor no ar");
  console.log("------------------------------------");
});
