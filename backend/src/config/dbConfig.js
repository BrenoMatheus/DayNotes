//importando mongoose
//import mongoose from "mongoose";
const mongoose = require('mongoose');

mongoose.set("strictQuery", true)

// url com usuario, senha e nome do banco para conectar no mongo DB
const dbname = "annotations" 
const db_pass = "8246" 
const dbConfig = `mongodb+srv://user:${db_pass}@cluster0.ptp8hdr.mongodb.net/${dbname}?retryWrites=true&w=majority`;
//criando conexão com o banco

const connection = mongoose.connect(dbConfig);

module.exports = connection;