const { Historial_Recoleccion } = require('../models');





// Obtener todos los Historiales de Recolección

const obtenerHistorialesRecoleccion = async (req, res) => {
  try {
    const historiales = await Historial_Recoleccion.findAll();
    res.status(200).json(historiales);
  } catch (error) {
    console.error(error); // Imprimir error
    res.status(500).json({ error: 'Error al obtener los historiales de recolección.' });
  }
};

// Crear un nuevo Historial de Recolección
const crearHistorialRecoleccion = async (req, res) => {
  try {
    console.log(req.body); // Para verificar el contenido del cuerpo de la solicitud

    // Extraer datos del cuerpo de la solicitud
    const { ID_Formulario, Fecha_Hrecoleccion, Cantidad_Hrecoleccion } = req.body;

    // Crear el nuevo historial de recolección
    const historial = await Historial_Recoleccion.create({
      ID_Formulario,
      Fecha_Hrecoleccion,
      Cantidad_Hrecoleccion,
    });

    // Enviar respuesta con el historial creado
    res.status(201).json(historial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el historial de recolección.', detalles: error.errors });
  }
};

// Actualizar un Historial de Recolección
const actualizarHistorialRecoleccion = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    const { id } = req.params;
    const { ID_Formulario, Fecha_Hrecoleccion, Cantidad_Hrecoleccion } = req.body;

    // Buscar el historial de recolección por su ID
    const historial = await Historial_Recoleccion.findByPk(id);

    if (!historial) {
      return res.status(404).json({ error: 'Historial de recolección no encontrado.' });
    }

    // Actualizar el historial de recolección
    await historial.update({
      ID_Formulario,
      Fecha_Hrecoleccion,
      Cantidad_Hrecoleccion,
    });

    res.status(200).json(historial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el historial de recolección.' });
  }
};

// Eliminar un Historial de Recolección
const eliminarHistorialRecoleccion = async (req, res) => {
  try {
    const { id } = req.params;
    const historial = await Historial_Recoleccion.findByPk(id);

    if (!historial) {
      return res.status(404).json({ error: 'Historial de recolección no encontrado.' });
    }

    await historial.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el historial de recolección.' });
  }
};

module.exports = { obtenerHistorialesRecoleccion, crearHistorialRecoleccion, actualizarHistorialRecoleccion, eliminarHistorialRecoleccion };
