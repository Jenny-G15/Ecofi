const { Recofi, Material } = require("../models");

const obtenerRecofis = async (req, res) => {
  try {
    console.log("Iniciando la consulta de recofis...");

    // Intenta realizar la consulta
    const recofis = await Recofi.findAll({
      include: [
        {
          model: Material,
          as: 'materialRecofi', 
          attributes: ['Tipo_Material'], 
        },
      ],
    });

    // Log para verificar la consulta ejecutada y los datos obtenidos
    console.log("Datos obtenidos de la base de datos:", JSON.stringify(recofis, null, 2));

    // Envía la respuesta al cliente
    res.status(200).json(recofis);
  } catch (error) {
    // Log para capturar errores
    console.error("Error al obtener los recofis:", error);

    // Respuesta de error al cliente
    res.status(500).json({ error: "Error al obtener los recofis." });
  }
};



// // Obtener todos los Recofis
// const obtenerRecofis = async (req, res) => {
//   try {
//     const recofis = await Recofi.findAll({
//       include: [
//         {
//           model: Material,
//           as: 'recofiMaterial', 
//           attributes: ['Tipo_Material'] 
//         }
//       ]
//     });
//     res.status(200).json(recofis);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener los recofis.' });
//   }
// };







// const obtenerRecofis = async (req, res) => {
//   try {
//     const recofis = await Recofi.findAll();
//     res.status(200).json(recofis);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener los recofis.' });
//   }
// };






// Crear un nuevo Recofi
const crearRecofi = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    const { ID_Direccion, ID_Material, Nombre_Recofi, Horario, Latitud, Longitud, Direccion_Recofi } = req.body;

    // Obtener todos los recofis para validar duplicados
    const recofis = await Recofi.findAll();

    for (let recofi of recofis) {
      if (recofi.Nombre_Recofi === Nombre_Recofi) {
        return res.status(400).json({ error: 'Ya existe un Centro de Recolección con ese nombre.' });
      }
    }

    // Crear el nuevo recofi
    const nuevoRecofi = await Recofi.create({ ID_Direccion, ID_Material, Nombre_Recofi, Horario, Latitud, Longitud, Direccion_Recofi });

    res.status(201).json(nuevoRecofi);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el recofi.' });
  }
};



// Actualizar un Recofi
const actualizarRecofi = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    const { id } = req.params;
    const { ID_Direccion, ID_Material, Nombre_Recofi, Horario, Latitud, Longitud } = req.body;

    // Buscar el recofi por su ID
    const recofi = await Recofi.findByPk(id);
    if (!recofi) {
      return res.status(404).json({ error: 'Recofi no encontrado.' });
    }

    // Obtener todos los recofis para validar duplicados
    const recofis = await Recofi.findAll();

    for (let otroRecofi of recofis) {
      if (otroRecofi.id !== recofi.id && otroRecofi.Nombre_Recofi === Nombre_Recofi) {
        return res.status(400).json({ error: 'Ya existe otro Centro de Recolección con ese nombre.' });
      }
    }

    // Actualizar el recofi
    await recofi.update({
      ID_Direccion,
      ID_Material,
      Nombre_Recofi,
      Horario,
      Latitud,
      Longitud,
    });

    res.status(200).json(recofi);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el recofi.' });
  }
};




// Eliminar un Recofi
const eliminarRecofi = async (req, res) => {
  try {
    const { id } = req.params;
    const recofi = await Recofi.findByPk(id);

    if (!recofi) {
      return res.status(404).json({ error: 'Recofi no encontrado.' });
    }

    await recofi.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el Recofi.' });
  }
};

module.exports = { obtenerRecofis, crearRecofi, actualizarRecofi, eliminarRecofi,};
