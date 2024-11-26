const { Formulario } = require('../models');

// Obtener todos los Formularios
const obtenerFormularios = async (req, res) => {
  try {
    const formularios = await Formulario.findAll();
    res.status(200).json(formularios);
  } catch (error) {
    console.error(error); // Imprimir error
    res.status(500).json({ error: 'Error al obtener los formularios.' });
  }
};

// Crear un nuevo Formulario
const crearFormulario = async (req, res) => {
  try {
    console.log(req.body); 

    // Extraer datos del cuerpo de la solicitud
    const { ID_Recofi, ID_Material, ID_Usuario, Bicolnes_Obtenidos, Fecha_Formulario } = req.body;

    // Crear el nuevo formulario
    const formulario = await Formulario.create({
      ID_Recofi,
      ID_Material,
      ID_Usuario,
      Bicolnes_Obtenidos,
      Fecha_Formulario,
    });

    // Respuesta con el formulario creado
    res.status(201).json(formulario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el formulario.', detalles: error.errors });
  }
};

// Actualizar un Formulario
const actualizarFormulario = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    const { id } = req.params;
    const { ID_Recofi, ID_Material, ID_Usuario, Bicolnes_Obtenidos, Fecha_Formulario } = req.body;

    // Buscar el formulario por su ID
    const formulario = await Formulario.findByPk(id);

    if (!formulario) {
      return res.status(404).json({ error: 'Formulario no encontrado.' });
    }

    // Actualizar el formulario
    await formulario.update({
      ID_Recofi,
      ID_Material,
      ID_Usuario,
      Bicolnes_Obtenidos,
      Fecha_Formulario,
    });

    res.status(200).json(formulario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el formulario.' });
  }
};

// Eliminar un Formulario
const eliminarFormulario = async (req, res) => {
  try {
    const { id } = req.params;
    const formulario = await Formulario.findByPk(id);

    if (!formulario) {
      return res.status(404).json({ error: 'Formulario no encontrado.' });
    }

    await formulario.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el formulario.' });
  }
};

module.exports = { obtenerFormularios, crearFormulario, actualizarFormulario, eliminarFormulario };
