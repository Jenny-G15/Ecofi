const { Emprendedor } = require('../models');




// Obtener todos los Emprendedores
const obtenerEmprendedores = async (req, res) => {
  try {
    const emprendedores = await Emprendedor.findAll();
    res.status(200).json(emprendedores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los emprendedores.' });
  }
};



// Crear un nuevo Emprendedor
const crearEmprendedor = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    // Extraer datos del cuerpo de la solicitud
    const { Nombre_Emprendedor, Descripcion, Nombre_Contacto, Producto_Ofrecido, Correo_Emprendedor,
      Telefono_Empresa, ID_Direccion, } = req.body;

    // Crear el nuevo emprendedor
    const emprendedor = await Emprendedor.create({
      Nombre_Emprendedor, Descripcion, Nombre_Contacto, Producto_Ofrecido, Correo_Emprendedor,
      Telefono_Empresa, ID_Direccion, });

    // Enviar respuesta con el emprendedor creado
    res.status(201).json(emprendedor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el emprendedor.', detalles: error.errors });
  }
};

// Actualizar un Emprendedor
const actualizarEmprendedor = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    const { id } = req.params;
    const {
      Nombre_Emprendedor,
      Descripcion,
      Nombre_Contacto,
      Producto_Ofrecido,
      Correo_Emprendedor,
      Telefono_Empresa,
      ID_Direccion,
    } = req.body;

    // Buscar el emprendedor por su ID
    const emprendedor = await Emprendedor.findByPk(id);

    if (!emprendedor) {
      return res.status(404).json({ error: 'Emprendedor no encontrado.' });
    }

    // Actualizar el emprendedor
    await emprendedor.update({
      Nombre_Emprendedor,
      Descripcion,
      Nombre_Contacto,
      Producto_Ofrecido,
      Correo_Emprendedor,
      Telefono_Empresa,
      ID_Direccion,
    });

    res.status(200).json(emprendedor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el emprendedor.' });
  }
};

// Eliminar un Emprendedor
const eliminarEmprendedor = async (req, res) => {
  try {
    const { id } = req.params;
    const emprendedor = await Emprendedor.findByPk(id);

    if (!emprendedor) {
      return res.status(404).json({ error: 'Emprendedor no encontrado.' });
    }

    await emprendedor.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el emprendedor.' });
  }
};

module.exports = { obtenerEmprendedores, crearEmprendedor, actualizarEmprendedor, eliminarEmprendedor,
};
