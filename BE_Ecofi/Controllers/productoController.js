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


<<<<<<< HEAD
=======



>>>>>>> db9964960e5b7e0b4540a8495390b739e1032316
// Crear un nuevo producto
const crearProducto = async (req, res) => {
  try {
    console.log(req.body); 
    
    const { ID_Emprendedor, Bicolones_Producto, Imagen, Stock, Descripcion_Producto, Nombre_Producto } = req.body;

    // Verifica si los campos son válidos
    if (!ID_Emprendedor || !Bicolones_Producto || !Imagen || !Stock || !Descripcion_Producto || !Nombre_Producto) {
      return res.status(400).json({ error: 'Faltan datos obligatorios.' });
    }

    // Validar si ya existe un producto con el mismo ID_Emprendedor y Descripcion_Producto
    const productos = await Producto.findAll();
    for (let prod of productos) {
      if (prod.Nombre_Producto === Nombre_Producto && prod.Descripcion_Producto === Descripcion_Producto) {
        return res.status(400).json({ error: 'Ya existe un producto con el mismo Nombre.' });
      }
    }

    // Aquí estaba el error: Faltaba incluir Nombre_Producto
    const producto = await Producto.create({
      ID_Emprendedor,
      Bicolones_Producto,
      Imagen,
      Stock,
      Descripcion_Producto,
      Nombre_Producto, // Inclúyelo aquí
    });

    res.status(201).json(producto);
  } catch (error) {
    console.error(error); // Ver los detalles completos del error
    res.status(500).json({ error: 'Error al crear el producto.', detalles: error });
  }
};










// Actualizar un producto
const actualizarProducto = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    const { id } = req.params;
    const { Bicolones_Producto, Imagen, Stock, Descripcion_Producto, ID_Emprendedor, Nombre_Producto } = req.body;

    // Buscar el producto por su ID
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }

    // Validar si ya existe otro producto con la misma Descripcion_Producto para el mismo ID_Emprendedor
    const productos = await Producto.findAll();
    for (let prod of productos) {
      if (prod.id !== producto.id && prod.Nombre_Producto === Nombre_Producto && prod.Descripcion_Producto === Descripcion_Producto) {
        return res.status(400).json({ error: 'Ya existe otro producto con ese Nombre' });
      }
    }

    // Actualizar el producto
    await producto.update({
      Bicolones_Producto,
      Imagen,
      Stock,
      Descripcion_Producto,
      Nombre_Producto,
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
