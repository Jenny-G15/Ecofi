const express = require('express');
    const router = express.Router();
    const HRecoleccioController = require('../Controllers/HRecoleccionControllers'); // Importar el controlador

    // Definir las rutas
    router.get('/', HRecoleccioController.obtenerHistorialesRecoleccion); // Obtener todos los emprendedores
    router.post('/', HRecoleccioController.crearHistorialRecoleccion);
    router.put('/:id', HRecoleccioController.actualizarHistorialRecoleccion);
    router.delete('/:id', HRecoleccioController.eliminarHistorialRecoleccion)
    

    module.exports = router;