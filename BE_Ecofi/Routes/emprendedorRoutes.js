

const express = require('express');
    const router = express.Router();
    const EmprendedorController = require('../Controllers/emprendedorController.js'); // Importar el controlador

    // Definir las rutas
    router.get('/', EmprendedorController.obtenerEmprendedores); // Obtener todos los emprendedores
    router.post('/',  EmprendedorController.crearEmprendedor);
    router.put('/:id', EmprendedorController.actualizarEmprendedor);
    router.delete('/:id', EmprendedorController.eliminarEmprendedor)
    

    module.exports = router;
