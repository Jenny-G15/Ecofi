const express = require('express');
const router = express.Router();
const AdminRecofiControllers = require('../Controllers/AdminRecofiControllers')



router.get('/', AdminRecofiControllers.getAdminRecofis); 
router.get('/:correo', AdminRecofiControllers.AdminRecofisPorCorreo);
router.post('/login', AdminRecofiControllers.iniciarSesionAdminRecofis); 
router.post('/register',  AdminRecofiControllers.postAdminRecofis);
router.delete('/:id',  AdminRecofiControllers.eliminarAdminRecofis); 
router.put('/:id',  AdminRecofiControllers.actualizarAdminRecofis); 



module.exports = router;
