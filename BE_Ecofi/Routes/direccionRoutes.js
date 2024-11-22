const express = require('express');
    const router = express.Router();
    const DireccionController = require('../Controllers/direccionController.js'); // Importar el controlador

    // Definir las rutas
    router.get('/', DireccionController.obtenerDireccion); 
    router.post('/', DireccionController.crearDireccion);
    router.put('/:id', DireccionController.actualizarDireccion);
    router.delete('/:id', DireccionController.eliminarDireccion)
    

    module.exports = router;
