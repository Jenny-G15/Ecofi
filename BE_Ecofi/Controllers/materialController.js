const { Material } = require('../models');




// Obtener todos los materiales

const obtenerMateriales = async (req, res) => {
  try {
    const materiales = await Material.findAll();
    res.status(200).json(materiales);
  } catch (error) {
    console.error(error); // Imprimir error
    res.status(500).json({ error: 'Error al obtener los materiales.' });
  }
};



// Crear un nuevo material

const crearMaterial = async (req, res) => {
  try {
    console.log(req.body); // Para verificar el contenido del cuerpo de la solicitud

    // Extraer datos del cuerpo de la solicitud
    const { Tipo_Material, Bicolones_Material, Descripcion_Material, Cantidad } = req.body;


    // Verificar si ya existe un material con la misma descripción
    const materialDB = await Material.findOne({
      where: { Tipo_Material }
    });

    if (materialDB) {
      return res.status(400).json({ error: 'Ya existe un material con esa descripción.' });
    }


    // Crear el nuevo material
    const material = await Material.create({
      Tipo_Material,
      Bicolones_Material,
      Descripcion_Material,
      Cantidad,
    });

    // Enviar respuesta con el material creado
    res.status(201).json(material);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el material.', detalles: error.errors });
  }
};



// Actualizar un material
const actualizarMaterial = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    const { id } = req.params;
    const { Tipo_Material, Bicolones_Material, Descripcion_Material, Cantidad } = req.body;

    // Buscar el material por su ID
    const material = await Material.findByPk(id);

    if (!material) {
      return res.status(404).json({ error: 'Material no encontrado.' });
    }

    // Actualizar el material
    await material.update({
      Tipo_Material,
      Bicolones_Material,
      Descripcion_Material,
      Cantidad,
    });

    res.status(200).json(material);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el material.' });
  }
};



// Eliminar un material
const eliminarMaterial = async (req, res) => {
  try {
    const { id } = req.params;
    const material = await Material.findByPk(id);

    if (!material) {
      return res.status(404).json({ error: 'Material no encontrado.' });
    }

    await material.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el material.' });
  }
};

module.exports = { obtenerMateriales, crearMaterial, actualizarMaterial, eliminarMaterial };
