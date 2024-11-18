const express = require('express');
const { iniciarSesion } = require('../Controllers/authControllers');
const router = express.Router();

// Ruta para iniciar sesión
router.post('/login', iniciarSesion);

module.exports = router;