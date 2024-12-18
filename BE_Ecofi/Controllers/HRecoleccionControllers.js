const { Historial_Recoleccion, Formulario, Recofi, Material } = require('../models');
const { Sequelize } = require('sequelize');







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
    console.log(req.body); 

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


const obtenerEstadisticas = async (req, res) => {
  try {
    // RECOFI con más intercambios
    const recofiConMasIntercambios = await Formulario.findOne({
      attributes: [
        'ID_Recofi',
        [Sequelize.fn('COUNT', Sequelize.col('ID_Recofi')), 'totalIntercambios']
      ],
      include: [
        {
          model: Recofi,
          as: 'formularioRecofi',
          attributes: ['Nombre_Recofi']
        }
      ],
      group: ['ID_Recofi', 'Recofi.id'],
      order: [[Sequelize.literal('totalIntercambios'), 'DESC']],
      limit: 1
    });


    
    // Material más intercambiado
    const materialMasIntercambiado = await Formulario.findOne({
      attributes: [
        'ID_Material',
        [Sequelize.fn('COUNT', Sequelize.col('ID_Material')), 'totalIntercambios']
      ],
      include: [
        {
          model: Material,
          as: 'materialFormulario',
          attributes: ['Tipo_Material']
        }
      ],
      group: ['ID_Material', 'Material.id'],
      order: [[Sequelize.literal('totalIntercambios'), 'DESC']],
      limit: 1
    });

    // Respuesta con los datos obtenidos
    res.json({
      recofiTop: recofiConMasIntercambios
        ? {
            nombre: recofiConMasIntercambios.Recofi.Nombre_Recofi,
            totalIntercambios: recofiConMasIntercambios.get('totalIntercambios')
          }
        : 'No hay datos disponibles',
      materialTop: materialMasIntercambiado
        ? {
            nombre: materialMasIntercambiado.Material.Tipo_Material,
            totalIntercambios: materialMasIntercambiado.get('totalIntercambios')
          }
        : 'No hay datos disponibles'
    });
  } catch (error) {
    console.error('Error al obtener las estadísticas:', error);
    res.status(500).json({ error: 'Ocurrió un problema al obtener las estadísticas' });
  }
};


module.exports = { obtenerHistorialesRecoleccion, crearHistorialRecoleccion, actualizarHistorialRecoleccion, eliminarHistorialRecoleccion,  obtenerEstadisticas };
