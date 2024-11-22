const express = require('express');
    const router = express.Router();
    const RecofiController = require('../Controllers/recofiController.js'); // Importar el controlador

    // Definir las rutas
    router.get('/', RecofiController.obtenerRecofis); 
    router.post('/', RecofiController.crearRecofi);
    router.put('/:id', RecofiController.actualizarRecofi);
    router.delete('/:id', RecofiController.eliminarRecofi)
    

    module.exports = router;