const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioCtrl');

// Ruta para autenticar un usuario
router.post('/usuarios/login', usuarioController.autenticarUsuario);

module.exports = router;