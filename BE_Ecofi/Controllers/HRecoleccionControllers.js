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
    // RECOFI con más intercambios (usuario con mayor cantidad recolectada)
    const recofiConMasRecolecciones = await Formulario.findOne({
      attributes: [
        'ID_Recofi',
        [Sequelize.fn('SUM', Sequelize.col('HistorialRecoleccion.Cantidad_Hrecoleccion')), 'totalRecolectado']
      ],
      include: [
        {
          model: Historial_Recoleccion,
          as: 'HistorialRecoleccion',
          attributes: [] // No necesitamos traer atributos del historial
        },
        {
          model: Recofi,
          as: 'Recofi',
          attributes: ['Nombre_Recofi'] // Nombre del recofi
        }
      ],
      group: ['ID_Recofi', 'Recofi.id'],
      order: [[Sequelize.literal('totalRecolectado'), 'DESC']],
      limit: 1
    });

    // Material más intercambiado
    const materialMasIntercambiado = await Formulario.findOne({
      attributes: [
        'ID_Material',
        [Sequelize.fn('SUM', Sequelize.col('HistorialRecoleccion.Cantidad_Hrecoleccion')), 'totalRecolectado']
      ],
      include: [
        {
          model: Historial_Recoleccion,
          as: 'HistorialRecoleccion',
          attributes: [] // No necesitamos traer atributos del historial
        },
        {
          model: Material,
          as: 'Material',
          attributes: ['Nombre_Material'] // Nombre del material
        }
      ],
      group: ['ID_Material', 'Material.id'],
      order: [[Sequelize.literal('totalRecolectado'), 'DESC']],
      limit: 1
    });

    // Enviar la respuesta con los resultados
    res.json({
      recofiTop: recofiConMasRecolecciones || 'No hay datos disponibles',
      materialTop: materialMasIntercambiado || 'No hay datos disponibles'
    });
  } catch (error) {
    // Capturar errores y devolver mensaje amigable
    console.error('Error al obtener las estadísticas:', error);
    res.status(500).json({ error: 'Ocurrió un problema al obtener las estadísticas' });
  }
};







// const obtenerEstadisticas = async (req, res) => {
//   try {
//     // RECOFI con más intercambios
//     const recofiTop = await Formulario.findAll({
//       attributes: [
//         'ID_Recofi',
//         [Sequelize.fn('SUM', Sequelize.col('formularioHRecoleccion.Cantidad_Hrecoleccion')), 'totalRecolecciones'],
//       ],
//       include: [
//         {
//           model: Historial_Recoleccion,
//           as: 'formularioHRecoleccion',
//           attributes: [],
//         },
//         {
//           model: Recofi,
//           as: 'formularioRecofi',
//           attributes: ['Nombre_Recofi'],
//         },
//       ],
//       group: ['ID_Recofi', 'formularioRecofi.id'],
//       order: [[Sequelize.literal('totalRecolecciones'), 'DESC']],
//       limit: 1,
//     });

//     // Material más intercambiado
//     const materialTop = await Formulario.findAll({
//       attributes: [
//         'ID_Material',
//         [Sequelize.fn('SUM', Sequelize.col('formularioHRecoleccion.Cantidad_Hrecoleccion')), 'totalRecolecciones'],
//       ],
//       include: [
//         {
//           model: Historial_Recoleccion,
//           as: 'formularioHRecoleccion',
//           attributes: [],
//         },
//         {
//           model: Material,
//           as: 'materialFormulario',
//           attributes: ['Nombre_Material'],
//         },
//       ],
//       group: ['ID_Material', 'materialFormulario.id'],
//       order: [[Sequelize.literal('totalRecolecciones'), 'DESC']],
//       limit: 1,
//     });

//     res.json({
//       recofiTop: recofiTop[0],
//       materialTop: materialTop[0],
//     });
//   } catch (error) {
//     console.error('Error al obtener estadísticas:', error);
//     res.status(500).json({ error: 'Error al obtener estadísticas' });
//   }
// };




module.exports = { obtenerHistorialesRecoleccion, crearHistorialRecoleccion, actualizarHistorialRecoleccion, eliminarHistorialRecoleccion,  obtenerEstadisticas };
