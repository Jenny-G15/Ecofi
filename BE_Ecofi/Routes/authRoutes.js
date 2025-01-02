const express = require('express');
const router = express.Router();
const { obtenerUsuarios, obtenerUsuariosxCedula, registrarUsuario, iniciarSesion, eliminarUsuario, actualizarUsuario, actualizarBicolones} = require('../controllers/authControllers');



router.get('/', obtenerUsuarios); 
router.get('/:cedula', obtenerUsuariosxCedula);
router.post('/login', iniciarSesion); 
router.post('/register', registrarUsuario);
router.delete('/:id', eliminarUsuario); 
router.put('/:id', actualizarUsuario); 
router.delete('/:id', eliminarUsuario);
router.put('/:id', actualizarUsuario);
router.put('/usuarios/:id/bicolones', actualizarBicolones);





module.exports = router;

