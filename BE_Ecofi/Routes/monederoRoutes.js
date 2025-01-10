
const express = require('express');
const router = express.Router();
const monederosController = require('../Controllers/monederoController.js'); 

    // Definir las rutas
    router.get('/', monederosController.obtenerMonederos); 
    router.post('/', monederosController.crearMonedero);
    router.put('/:id', monederosController.actualizarMonedero);
    router.delete('/:id', monederosController.eliminarMonedero)
    

    module.exports = router;