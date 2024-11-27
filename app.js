const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api', require('./routes/discos'));

// Banco de dados
const sequelize = require('./config');
sequelize.sync().then(() => console.log('Banco sincronizado!'));

// Porta do servidor
app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
