const verificarToken = require("../Middlewares/authMiddleware")


const express = require('express');
    const router = express.Router();
    const FormularioController = require('../Controllers/formularioControllers'); // Importar el controlador

    // Definir las rutas
    router.get('/', FormularioController.obtenerFormularios); 
    router.post('/', verificarToken, FormularioController.crearFormulario);
    router.put('/:id', verificarToken, FormularioController.actualizarFormulario);
    router.delete('/:id', verificarToken, FormularioController.eliminarFormulario)
    

    module.exports = router;