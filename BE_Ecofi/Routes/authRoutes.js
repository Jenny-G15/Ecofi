const express = require('express');
const router = express.Router();
const controladorUsuarios = require('../Controllers/authControllers')
// const {forgotPassword, resetPassword} = require('../Controllers/authControllers')
// const {forgotPassword, resetPassword} = require('../Controllers/authControllers')


router.get('/', controladorUsuarios.obtenerUsuarios); 
router.get('/:cedula', controladorUsuarios.UsuariosxCedula)
router.post('/login', controladorUsuarios.iniciarSesion); 
router.post('/register', controladorUsuarios.registrarUsuario);
router.delete('/:id', controladorUsuarios.eliminarUsuario); 
router.put('/:id', controladorUsuarios.actualizarUsuario); 
router.put('/usuarios/:id/bicolones', controladorUsuarios.actualizarBicolones);




module.exports = router;

