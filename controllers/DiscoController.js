const Disco = require('../models/Disco');

exports.listarDiscos = async (req, res) => {
    try {
        const discos = await Disco.findAll();
        res.json(discos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar discos.' });
    }
};

