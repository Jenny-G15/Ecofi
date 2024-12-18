const express = require('express');
const router = express.Router();
const { obtenerUsuarios, obtenerUsuariosxCedula, registrarUsuario, iniciarSesion, eliminarUsuario, actualizarUsuario } = require('../controllers/authControllers');
const {forgotPassword, resetPassword} = require('../Controllers/authControllers')

router.get('/', obtenerUsuarios); 
router.get('/:cedula', obtenerUsuariosxCedula);
router.post('/login', iniciarSesion); 
router.post('/register', registrarUsuario);
router.delete('/:id', eliminarUsuario); 
router.put('/:id', actualizarUsuario); 

// Recuperación de contraseña
router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword', resetPassword);


module.exports = router;

