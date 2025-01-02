const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const controladorUsuarios = require('../Controllers/authControllers')
=======
const { obtenerUsuarios, obtenerUsuariosxCedula, registrarUsuario, iniciarSesion, eliminarUsuario, actualizarUsuario, actualizarBicolones } = require('../controllers/authControllers');

>>>>>>> 10300ddf719c889b3cd6c5369ff3393587510d64



router.get('/', obtenerUsuarios); 
router.get('/:cedula', obtenerUsuariosxCedula);
router.post('/login', iniciarSesion); 
router.post('/register', registrarUsuario);
router.delete('/:id', eliminarUsuario); 
router.put('/:id', actualizarUsuario); 
router.put('/usuarios/:id/bicolones', actualizarBicolones);



<<<<<<< HEAD
module.exports = router;
=======



module.exports = router;

>>>>>>> 10300ddf719c889b3cd6c5369ff3393587510d64
