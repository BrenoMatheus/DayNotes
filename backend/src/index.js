//framwork core da app, e o servidor
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
require('./config/dbConfig');

app.use(cors());
//recurso para garantir a leitura do json
app.use(express.json());
app.use(routes);
//atribuindo ao use routes

//declaração da porta
app.listen(3333);
