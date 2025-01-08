
 const express = require('express');
 const router = express.Router();
 const ProductosController = require('../Controllers/productoController.js'); // Importar el controlador

    // Definir las rutas
    router.get('/', ProductosController.obtenerProductos); 
    router.post('/',  ProductosController.crearProducto);
    router.put('/:id', ProductosController.actualizarProducto);
    router.delete('/:id', ProductosController.eliminarProducto)
    

    module.exports = router;