const express = require('express');
    const router = express.Router();
    const MaterialController = require('../Controllers/materialController.js'); // Importar el controlador

    // Definir las rutas
    router.get('/', MaterialController.obtenerMateriales); 
    router.post('/', MaterialController.crearMaterial);
    router.put('/:id', MaterialController.actualizarMaterial);
    router.delete('/:id', MaterialController.eliminarMaterial)
    

    module.exports = router;