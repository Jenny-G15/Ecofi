const { Monedero } = require('../models');

// Obtener todos los monederos
const obtenerMonederos = async (req, res) => {
  try {
    const monederos = await Monedero.findAll();
    res.status(200).json(monederos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los monederos.' });
  }
};

// Crear un nuevo monedero
const crearMonedero = async (req, res) => {
  try {
    console.log(req.body);

    const { ID_Usuario, Saldo_Actual } = req.body;

    if (!ID_Usuario || Saldo_Actual == null) {
      return res.status(400).json({ error: 'Faltan datos obligatorios.' });
    }

    const existeMonedero = await Monedero.findOne({ where: { ID_Usuario } });

    if (existeMonedero) {
      return res.status(400).json({ error: 'Ya existe un monedero para este usuario.' });
    }

    const monedero = await Monedero.create({
      ID_Usuario,
      Saldo_Actual,
    });

    res.status(201).json(monedero);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el monedero.', detalles: error });
  }
};

// Actualizar un monedero
const actualizarMonedero = async (req, res) => {
  try {
    console.log(req.body);

    const { id } = req.params;
    const { Saldo_Actual } = req.body;

    if (Saldo_Actual == null) {
      return res.status(400).json({ error: 'Faltan datos obligatorios para actualizar el monedero.' });
    }

    const monedero = await Monedero.findByPk(id);

    if (!monedero) {
      return res.status(404).json({ error: 'Monedero no encontrado.' });
    }

    await monedero.update({
      Saldo_Actual,
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

module.exports = { obtenerMonederos, crearMonedero, actualizarMonedero, eliminarMonedero };
