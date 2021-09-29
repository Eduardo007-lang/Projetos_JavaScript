const express = require('express');
const app = express();

const rotas = require('../app/controllers/raiz.js');
rotas(app);


module.exports = app;


