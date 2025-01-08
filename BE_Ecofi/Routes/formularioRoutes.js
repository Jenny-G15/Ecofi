


const express = require('express');
    const router = express.Router();
    const FormularioController = require('../Controllers/formularioControllers'); // Importar el controlador

    // Definir las rutas
    router.get('/', FormularioController.obtenerFormularios); 
    router.post('/',  FormularioController.crearFormulario);
    router.put('/:id',  FormularioController.actualizarFormulario);
    router.delete('/:id', FormularioController.eliminarFormulario)
    

    module.exports = router;