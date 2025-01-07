const express = require('express');
const router = express.Router();
const verificarToken = require("../Middlewares/authMiddleware")
const { obtenerUsuarios, UsuariosxCedula, registrarUsuario, iniciarSesion, eliminarUsuario, actualizarUsuario, actualizarBicolones } = require('../controllers/authControllers');

router.get('/', obtenerUsuarios); 
router.get('/:cedula', UsuariosxCedula);
router.post('/login', iniciarSesion); 
router.post('/register', registrarUsuario);
router.delete('/:id', verificarToken, eliminarUsuario); 
router.put('/:id', verificarToken, actualizarUsuario); 
router.put('/usuarios/:id/bicolones',verificarToken, actualizarBicolones);


module.exports = router;

