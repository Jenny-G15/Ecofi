const express = require('express');
    const router = express.Router();
    const usuarioController = require('../Controllers/usuarioController'); // Importar el controlador

    // Definir las rutas
    router.get('/', usuarioController.obtenerUsuarios); // Obtener todos los clientes
    router.post('/', usuarioController.crearUsuario);
    router.put('/:id', usuarioController.actualizarUsuario);
    router.delete('/:id', usuarioController.eliminarUsuario)
    



    module.exports = router;
