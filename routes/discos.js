const express = require('express');
const router = express.Router();
const { listarDiscos } = require('../controllers/DiscoController');

router.get('/discos', listarDiscos);

module.exports = router;
