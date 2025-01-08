const verificarToken = require("../Middlewares/authMiddleware")
 const express = require('express');
 const router = express.Router();
 const ProductosController = require('../Controllers/productoController.js'); // Importar el controlador

    // Definir las rutas
    router.get('/', ProductosController.obtenerProductos); 
    router.post('/', verificarToken, ProductosController.crearProducto);
    router.put('/:id', verificarToken, ProductosController.actualizarProducto);
    router.delete('/:id', verificarToken, ProductosController.eliminarProducto)
    

    module.exports = router;