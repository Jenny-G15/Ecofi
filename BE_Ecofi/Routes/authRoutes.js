const express = require('express');
const router = express.Router();
const { iniciarSesion, registrarUsuario, obtenerUsuarios } = require('../Controllers/authControllers');
const {forgotPassword, resetPassword} = require('../Controllers/authControllers')


//Rutas para Login y Register
router.get('/', obtenerUsuarios)
router.post('/login', iniciarSesion);
router.post('/register', registrarUsuario)




// Recuperación de contraseña
// router.post('/forgotPassword', forgotPassword);
// router.post('/resetPassword', resetPassword);

module.exports = router;

