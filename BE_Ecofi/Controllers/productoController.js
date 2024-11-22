const { Producto } = require('../models');

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    console.error(error); // Imprimir error
    res.status(500).json({ error: 'Error al obtener los productos.' });
  }
};

// Crear un nuevo producto
const crearProducto = async (req, res) => {
  try {
    console.log(req.body); // Para verificar el contenido del cuerpo de la solicitud

    // Extraer datos del cuerpo de la solicitud
    const { ID_Emprendedor, Bicolones_Producto, Imagen, Stock, Descripcion_Producto } = req.body;

    // Crear el nuevo producto
    const producto = await Producto.create({
      ID_Emprendedor,
      Bicolones_Producto,
      Imagen,
      Stock,
      Descripcion_Producto,
    });

    // Enviar respuesta con el producto creado
    res.status(201).json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el producto.', detalles: error.errors });
  }
};

// Actualizar un producto
const actualizarProducto = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    const { id } = req.params;
    const { Bicolones_Producto, Imagen, Stock, Descripcion_Producto } = req.body;

    // Buscar el producto por su ID
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }

    // Actualizar el producto
    await producto.update({
      Bicolones_Producto,
      Imagen,
      Stock,
      Descripcion_Producto,
    });

    res.status(200).json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el producto.' });
  }
};

// Eliminar un producto
const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }

    await producto.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el producto.' });
  }
};

module.exports = { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto };
