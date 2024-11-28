const { Monedero } = require('../models');

// Obtener todos los monederos
const obtenerMonederos = async (req, res) => {
  try {
    const monederos = await Monedero.findAll();
    res.status(200).json(monederos);
  } catch (error) {
    console.error(error); // Imprimir error
    res.status(500).json({ error: 'Error al obtener los monederos.' });
  }
};

// Crear un nuevo monedero
const crearMonedero = async (req, res) => {
  try {
    console.log(req.body); // Para verificar el contenido del cuerpo de la solicitud

    // Extraer datos del cuerpo de la solicitud
    const { ID_Usuario, Saldo_Actual, Ultima_Actualizacion } = req.body;

      // Validar que no exista un Monedero con el mismo nombre, correo o teléfono
      const MonederoDB = await Monedero.findAll();
      for (let Monedero of MonederoDB) {
        if (Monedero.ID_Usuario === ID_Usuario) {
          return res.status(400).json({ error: 'Ya existe un Monedero para ese Usaurio, por favor revisa los Datos' });
        }
    }



    // Crear el nuevo monedero
    const monedero = await Monedero.create({
      ID_Usuario,
      Saldo_Actual,
      Ultima_Actualizacion,
    });

    // Enviar respuesta con el monedero creado
    res.status(201).json(monedero);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el monedero.', detalles: error.errors });
  }
};

// Actualizar un monedero
const actualizarMonedero = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    const { id } = req.params;
    const { Saldo_Actual, Ultima_Actualizacion } = req.body;

    // Buscar el monedero por su ID
    const monedero = await Monedero.findByPk(id);

    if (!monedero) {
      return res.status(404).json({ error: 'Monedero no encontrado.' });
    }

    // Actualizar el monedero
    await monedero.update({
      Saldo_Actual,
      Ultima_Actualizacion,
    });

    res.status(200).json(monedero);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el monedero.' });
  }
};

// Eliminar un monedero
const eliminarMonedero = async (req, res) => {
  try {
    const { id } = req.params;
    const monedero = await Monedero.findByPk(id);

    if (!monedero) {
      return res.status(404).json({ error: 'Monedero no encontrado.' });
    }

    await monedero.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el monedero.' });
  }
};

module.exports = { obtenerMonederos, crearMonedero, actualizarMonedero, eliminarMonedero};
