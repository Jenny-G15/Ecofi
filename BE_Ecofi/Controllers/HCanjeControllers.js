const { Historial_Canjes } = require('../models');

// Obtener todos los Historiales de Canjes
const obtenerHistorialCanjes = async (req, res) => {
  try {
    const historialCanjes = await Historial_Canjes.findAll();
    res.status(200).json(historialCanjes);
  } catch (error) {
    console.error(error); // Imprimir error
    res.status(500).json({ error: 'Error al obtener el historial de canjes.' });
  }
};

// Crear un nuevo Historial de Canje
const crearHistorialCanje = async (req, res) => {
  try {
    console.log(req.body); // Para verificar el contenido del cuerpo de la solicitud

    // Extraer datos del cuerpo de la solicitud
    const { ID_Canje } = req.body;

    // Crear el nuevo historial de canje
    const historialCanje = await Historial_Canjes.create({
      ID_Canje,
    });

    // Enviar respuesta con el historial creado
    res.status(201).json(historialCanje);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el historial de canje.', detalles: error.errors });
  }
};

// Actualizar un Historial de Canje
const actualizarHistorialCanje = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    const { id } = req.params;
    const { ID_Canje } = req.body;

    // Buscar el historial de canje por su ID
    const historialCanje = await Historial_Canjes.findByPk(id);

    if (!historialCanje) {
      return res.status(404).json({ error: 'Historial de canje no encontrado.' });
    }

    // Actualizar el historial de canje
    await historialCanje.update({
      ID_Canje,
    });

    res.status(200).json(historialCanje);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el historial de canje.' });
  }
};

// Eliminar un Historial de Canje
const eliminarHistorialCanje = async (req, res) => {
  try {
    const { id } = req.params;
    const historialCanje = await Historial_Canjes.findByPk(id);

    if (!historialCanje) {
      return res.status(404).json({ error: 'Historial de canje no encontrado.' });
    }

    await historialCanje.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el historial de canje.' });
  }
};

module.exports = { obtenerHistorialCanjes, crearHistorialCanje, actualizarHistorialCanje, eliminarHistorialCanje };
