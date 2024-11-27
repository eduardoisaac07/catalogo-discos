const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Disco, Artista, Faixa, Genero } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// CRUD de discos
app.get('/discos', async (req, res) => {
  const discos = await Disco.findAll({ include: [Artista, Genero, Faixa] });
  res.json(discos);
});

app.post('/discos', async (req, res) => {
  const { titulo, ano, capa, faixas } = req.body;
  const novoDisco = await Disco.create({ titulo, ano, capa });
  if (faixas) {
    for (const faixa of faixas) {
      await Faixa.create({ ...faixa, discoId: novoDisco.id });
    }
  }
  res.status(201).json(novoDisco);
});

app.put('/discos/:id', async (req, res) => {
  const { id } = req.params;
  const { titulo, ano, capa } = req.body;
  const disco = await Disco.findByPk(id);
  if (!disco) return res.status(404).send('Disco não encontrado');
  await disco.update({ titulo, ano, capa });
  res.json(disco);
});

app.delete('/discos/:id', async (req, res) => {
  const { id } = req.params;
  await Disco.destroy({ where: { id } });
  res.status(204).send();
});

// Resto das rotas: Artista, Gênero, Faixa (siga o padrão acima)

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
