const express = require('express');
const router = express.Router();
<<<<<<< HEAD
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
=======
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
>>>>>>> a40ffea93f43a1cf72669340f2694d41398c037b





<<<<<<< HEAD
module.exports = router;

=======

// Recuperación de contraseña
// router.post('/forgotPassword', forgotPassword);
// router.post('/resetPassword', resetPassword);


module.exports = router;
>>>>>>> a40ffea93f43a1cf72669340f2694d41398c037b
