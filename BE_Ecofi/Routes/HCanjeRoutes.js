const express = require('express');
    const router = express.Router();
    const HCanjeControllers = require('../Controllers/HCanjeControllers'); // Importar el controlador

    // Definir las rutas
    router.get('/', HCanjeControllers.obtenerHistorialCanjes); 
    router.post('/', HCanjeControllers.crearHistorialCanje);
    router.put('/:id', HCanjeControllers.actualizarHistorialCanje);
    router.delete('/:id', HCanjeControllers.eliminarHistorialCanje)
    

    module.exports = router;