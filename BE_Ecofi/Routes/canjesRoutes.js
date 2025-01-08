



const express = require('express');
    const router = express.Router();
    const CanjesController = require('../Controllers/canjesControllers'); // Importar el controlador

    // Definir las rutas
    router.get('/', CanjesController.obtenerCanjes); 
    router.post('/', CanjesController.crearCanje);
    router.put('/:id', CanjesController.actualizarCanje);
    router.delete('/:id', CanjesController.eliminarCanje)
    

    module.exports = router;