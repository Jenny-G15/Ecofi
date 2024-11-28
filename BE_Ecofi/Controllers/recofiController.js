const { Recofi } = require('../models');

// Obtener todos los Recofis
const obtenerRecofis = async (req, res) => {
  try {
    const recofis = await Recofi.findAll();
    res.status(200).json(recofis);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los recofis.' });
  }
};

// Crear un nuevo Recofi
const crearRecofi = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    // Extraer datos del cuerpo de la solicitud
    const { ID_Direccion, ID_Material, Nombre_Recofi, Horario, Latitud, Longitud, Direccion_Recofi } = req.body;

    
    // Verificar si ya existe un Recofi con el mismo nombre
    const RecofiDB = await Recofi.findOne({
      where: { Nombre_Recofi }
    });

    if (RecofiDB) {
      return res.status(400).json({ error: 'Ya existe un Centro de Recolección con ese nombre.' });
    }


    // Crear el nuevo recofi
    const recofi = await Recofi.create({ ID_Direccion, ID_Material, Nombre_Recofi, Horario, Latitud, Longitud, Direccion_Recofi });

    // Enviar respuesta con el recofi creado
    res.status(201).json(recofi);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el recofi.', detalles: error.errors });
  }
};

// Actualizar un Recofi
const actualizarRecofi = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    const { id } = req.params;
    const { ID_Direccion, ID_Material, Horario, Latitud, Longitud } = req.body;

    // Buscar el recofi por su ID
    const recofi = await Recofi.findByPk(id);

    if (!recofi) {
      return res.status(404).json({ error: 'Recofi no encontrado.' });
    }

      // Validar que no exista otro usuario con la misma cédula o email
      const recofis = await Recofi.findAll();
      for (let otroUsuario of recofis) {
        if (
          otroUsuario.id !== usuario.id && // Asegurarse de que no sea el mismo usuario
          (otroUsuario.Cedula === Cedula || otroUsuario.Email_Usuario === Email_Usuario)
        ) {
          return res.status(400).json({ error: 'Ya existe otro usuario con la misma cédula o correo.' });
        }
      }

    // Actualizar el recofi
    await recofi.update({
      ID_Direccion,
      ID_Material,
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
