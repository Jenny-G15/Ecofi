const express = require('express');
const router = express.Router();
const AdminRecofiControllers = require('../Controllers/AdminRecofiControllers')
const verificarToken = require("../Middlewares/authMiddleware")




router.get('/', AdminRecofiControllers.getAdminRecofis); 
router.get('/:correo', AdminRecofiControllers.AdminRecofisPorCorreo);
router.post('/login', AdminRecofiControllers.iniciarSesionAdminRecofis); 
router.post('/register', verificarToken,  verificarToken,  AdminRecofiControllers.postAdminRecofis);
router.delete('/:id', verificarToken, AdminRecofiControllers.eliminarAdminRecofis); 
router.put('/:id', verificarToken, AdminRecofiControllers.actualizarAdminRecofis); 



module.exports = router;
