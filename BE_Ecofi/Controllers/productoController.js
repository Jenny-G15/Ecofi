const { Producto, sequelize } = require('../models');

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos.' });
  }
};

// Crear un nuevo producto
const crearProducto = async (req, res) => {
  try {
    const { ID_Emprendedor, Bicolones_Producto, Imagen, Stock, Descripcion_Producto, Nombre_Producto } = req.body;

    if (!ID_Emprendedor || !Bicolones_Producto || !Imagen || !Stock || !Descripcion_Producto || !Nombre_Producto) {
      return res.status(400).json({ error: 'Faltan datos obligatorios.' });
    }

    const productoExistente = await Producto.findOne({
      where: { Nombre_Producto, Descripcion_Producto },
    });

    if (productoExistente) {
      return res.status(400).json({ error: 'Ya existe un producto con ese Nombre y Descripción.' });
    }

    const producto = await Producto.create({
      ID_Emprendedor,
      Bicolones_Producto,
      Imagen,
      Stock,
      Descripcion_Producto,
      Nombre_Producto,
    });

    res.status(201).json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el producto.' });
  }
};



// Actualizar un producto existente
const actualizarProducto = async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body); // Para depuración

    const { id } = req.params;
    const datosActualizados = req.body; // Acceder directamente a req.body

    // Verificar que se hayan enviado datos para actualizar
    if (!datosActualizados) {
      return res.status(400).json({ error: 'Faltan datos obligatorios para actualizar el producto.' });
    }

    // Buscar el producto por ID
    const producto = await Producto.findByPk(id);

    // Verificar si el producto existe
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }

    console.log("Datos a actualizar:", datosActualizados);
    
    // Actualizar el producto con los datos proporcionados
    await producto.update(datosActualizados); // Pasar datosActualizados directamente

    // Devolver el producto actualizado
    res.status(200).json(producto);
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
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






















// const { Producto, sequelize, Op } = require('../models');

// // Obtener todos los productos
// const obtenerProductos = async (req, res) => {
//   try {
//     const productos = await Producto.findAll();
//     res.status(200).json(productos);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener los productos.' });
//   }
// };

// // Crear un nuevo producto
// const crearProducto = async (req, res) => {
//   try {
//     const { ID_Emprendedor, Bicolones_Producto, Imagen, Stock, Descripcion_Producto, Nombre_Producto } = req.body;

//     if (!ID_Emprendedor || !Bicolones_Producto || !Imagen || !Stock || !Descripcion_Producto || !Nombre_Producto) {
//       return res.status(400).json({ error: 'Faltan datos obligatorios.' });
//     }

//     const productoExistente = await Producto.findOne({
//       where: { Nombre_Producto, Descripcion_Producto },
//     });

//     if (productoExistente) {
//       return res.status(400).json({ error: 'Ya existe un producto con ese Nombre y Descripción.' });
//     }

//     const producto = await Producto.create({
//       ID_Emprendedor,
//       Bicolones_Producto,
//       Imagen,
//       Stock,
//       Descripcion_Producto,
//       Nombre_Producto,
//     });

//     res.status(201).json(producto);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al crear el producto.' });
//   }
// };

// // Actualizar un producto
// const actualizarProducto = async (req, res) => {
//   const t = await sequelize.transaction();
//   try {
//     const { id } = req.params;
//     const { Bicolones_Producto, Imagen, Stock, Descripcion_Producto, Nombre_Producto } = req.body;

//     if (Stock < 0) {
//       return res.status(400).json({ error: 'El stock no puede ser negativo.' });
//     }

//     const producto = await Producto.findByPk(id, { transaction: t });

//     if (!producto) {
//       await t.rollback();
//       return res.status(404).json({ error: 'Producto no encontrado.' });
//     }

//     const productoExistente = await Producto.findOne({
//       where: {
//         id: { [Op.ne]: id },
//         Nombre_Producto,
//         Descripcion_Producto,
//       },
//       transaction: t,
//     });

//     if (productoExistente) {
//       await t.rollback();
//       return res.status(400).json({ error: 'Ya existe otro producto con ese Nombre y Descripción.' });
//     }

//     await producto.update(
//       {
//         Bicolones_Producto,
//         Imagen,
//         Stock,
//         Descripcion_Producto,
//         Nombre_Producto,
//       },
//       { transaction: t }
//     );

//     await t.commit();
//     res.status(200).json(producto);
//   } catch (error) {
//     await t.rollback();
//     console.error(error);
//     res.status(500).json({ error: 'Error al actualizar el producto.' });
//   }
// };

// // Eliminar un producto
// const eliminarProducto = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const producto = await Producto.findByPk(id);

//     if (!producto) {
//       return res.status(404).json({ error: 'Producto no encontrado.' });
//     }

//     await producto.destroy();
//     res.status(204).send();
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al eliminar el producto.' });
//   }
// };

// module.exports = { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto };
