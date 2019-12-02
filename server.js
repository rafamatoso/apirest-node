const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/nodeapi';
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
// Permite o envio de informações no formato de json para a app
app.use(express.json());
// Permite o acesso à api de outros
app.use(cors());

// Iniciando o MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(error => console.log(error));

// Registra o model (ou os models que tiver na pasta /models) na nossa aplicação
requireDir('./src/models');

// Rotas - Recebe uma requisição a partir da rota básica esepcificada no primeiro parâmetro
app.use('/api', require('./src/routes'));

app.listen(3000);
