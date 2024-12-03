const { Direccion } = require ('../models');

// Llamar al Direccion:
const obtenerDireccion = async (req, res) => {
  try {
    const Direccions = await Direccion.findAll(); 
    res.status(200).json(Direccions);

  } catch (error) {
    console.error(error); // Imprimir error
    res.status(500).json({ error: 'Error al obtener la Dirección.' });
  }
};





const crearDireccion = async (req, res) => {
  try {
    console.log(req.body); // Para verificar el contenido del cuerpo de la solicitud

    // Extraer datos del cuerpo de la solicitud
    const {
      Canton,
      Distrito,
      otras_Senas,
    } = req.body;

    // Crear el nuevo Direccion
    const Direccion = await Direccion.create({
      Canton,
      Distrito,
      otras_Senas,
    });

    // Enviar respuesta con el Direccion creado
    res.status(201).json(Direccion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la Direccion.', detalles: error.errors });
  }
};






const actualizarDireccion = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    const { id } = req.params;
    const {
      Canton,
      Distrito,
      otras_Senas,
    } = req.body;

    // Buscar el Direccion por su ID
    const Direccion = await Direccion.findByPk(id);

    if (!Direccion) {
      return res.status(404).json({ error: 'Direccion no encontrado.' });
    }

    // Actualizar el Direccion
    await Direccion.update({
      Canton,
      Distrito,
      otras_Senas,
    });

    res.status(200).json(Direccion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la Direccion.' });
  }
};











  // Eliminar un Direccion
  const eliminarDireccion = async (req, res) => {
    try {
    const { id } = req.params;
    const Direccions = await Direccion.findByPk(id);
    if (!Direccions) return res.status(404).json({ error: 'Direccion no encontrado.' });

    await Direccions.destroy();
    res.status(204).send(); 
    
    } catch (error) {
    console.error(error);    
    res.status(500).json({ error: 'Ooops Error al eliminar al Direccion.' });
    }
  };



  
  module.exports = { obtenerDireccion, crearDireccion, actualizarDireccion, eliminarDireccion };