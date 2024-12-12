const express = require('express');
const router = express.Router();
const { iniciarSesion, registrarUsuario, obtenerUsuarios, eliminarUsuario, actualizarUsuario } = require('../Controllers/authControllers');
// const {forgotPassword, resetPassword} = require('../Controllers/authControllers')


//Rutas para Login y Register
router.get('/:cedula', obtenerUsuarios);
router.post('/login', iniciarSesion);
router.post('/register', registrarUsuario);
router.delete('/:id', eliminarUsuario);
router.put('/:id', actualizarUsuario);





// Recuperación de contraseña
// router.post('/forgotPassword', forgotPassword);
// router.post('/resetPassword', resetPassword);

module.exports = router;

