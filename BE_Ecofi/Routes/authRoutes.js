const express = require('express');
const router = express.Router();
// const verificarToken = require('../Middlewares/authMiddleware.js')
const { obtenerUsuarios, UsuariosxCedula, registrarUsuario, iniciarSesion, eliminarUsuario, actualizarUsuario, actualizarBicolones } = require('../controllers/authControllers');

router.get('/', obtenerUsuarios); 
router.get('/:cedula', UsuariosxCedula);
router.post('/login', iniciarSesion); 
router.post('/register', registrarUsuario);
router.delete('/:id', eliminarUsuario); 
router.put('/:id', actualizarUsuario); 
router.put('/usuarios/:id/bicolones', actualizarBicolones);


module.exports = router;

