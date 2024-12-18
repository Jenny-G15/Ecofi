const express = require('express');
const router = express.Router();
const { obtenerUsuarios, obtenerUsuariosxCedula, registrarUsuario, iniciarSesion, eliminarUsuario, actualizarUsuario } = require('../controllers/authControllers');
const {forgotPassword, resetPassword} = require('../Controllers/authControllers')
const { iniciarSesion, registrarUsuario, obtenerUsuarios, eliminarUsuario, actualizarUsuario, actualizarBicolones } = require('../Controllers/authControllers');
// const {forgotPassword, resetPassword} = require('../Controllers/authControllers')


router.get('/', obtenerUsuarios); 
router.get('/:cedula', obtenerUsuariosxCedula);
router.post('/login', iniciarSesion); 
router.post('/register', registrarUsuario);

router.delete('/:id', eliminarUsuario); 
router.put('/:id', actualizarUsuario); 

router.delete('/:id', eliminarUsuario);
router.put('/:id', actualizarUsuario);
router.put('/usuarios/:id/bicolones', actualizarBicolones);






// Recuperación de contraseña
router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword', resetPassword);


module.exports = router;

