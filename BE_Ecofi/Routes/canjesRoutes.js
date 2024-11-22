const express = require('express');
    const router = express.Router();
    const CanjessController = require('../Controllers/canjesControllers'); // Importar el controlador

    // Definir las rutas
    router.get('/', CanjessController.obtenerCanjes); 
    router.post('/', CanjessController.crearCanje);
    router.put('/:id', CanjessController.actualizarCanje);
    router.delete('/:id', CanjessController.eliminarCanje)
    

    module.exports = router;