const { Canjes } = require('../models');

// Llamar todos los Canjes
const obtenerCanjes = async (req, res) => {
  try {
    const canjes = await Canjes.findAll();
    res.status(200).json(canjes);
  } catch (error) {
    console.error(error); // Imprimir error
    res.status(500).json({ error: 'Error al obtener los canjes.' });
  }
};

// Crear un nuevo Canje
const crearCanje = async (req, res) => {
  try {
    console.log(req.body); // Para verificar el contenido del cuerpo de la solicitud

    // Extraer datos del cuerpo de la solicitud
    const { ID_Usuario, ID_Producto, Fecha_Canje } = req.body;

    // Crear el nuevo canje
    const canje = await Canjes.create({
      ID_Usuario,
      ID_Producto,
      Fecha_Canje,
    });

    // Enviar respuesta con el canje creado
    res.status(201).json(canje);
  } catch (error) {
    console.error(error); // Imprimir error completo para depuración
    // Devolver el error detallado en la respuesta
    res.status(500).json({
      error: 'Error al crear el Canje.',
      detalles: error.errors ? error.errors : error.message,
    });
  }
};


// Actualizar un Canje
const actualizarCanje = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    const { id } = req.params;
    const { ID_Usuario, ID_Producto, Fecha_Canje } = req.body;

    // Buscar el canje por su ID
    const canje = await Canjes.findByPk(id);

    if (!canje) {
      return res.status(404).json({ error: 'Canje no encontrado.' });
    }

    // Actualizar el canje
    await canje.update({
      ID_Usuario,
      ID_Producto,
      Fecha_Canje,
    });

    res.status(200).json(canje);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el Canje.' });
  }
};

// Eliminar un Canje
const eliminarCanje = async (req, res) => {
  try {
    const { id } = req.params;
    const canje = await Canjes.findByPk(id);

    if (!canje) {
      return res.status(404).json({ error: 'Canje no encontrado.' });
    }

    await canje.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el Canje.' });
  }
};

module.exports = { obtenerCanjes, crearCanje, actualizarCanje, eliminarCanje };
