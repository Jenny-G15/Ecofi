const { Usuario } = require ('../models');





// Llamar al Usuario:
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll(); 
    res.status(200).json(usuarios);

  } catch (error) {
    console.error(error); // Imprimir error
    res.status(500).json({ error: 'Error al obtener los usuarios.' });
  }
};





const crearUsuario = async (req, res) => {
  try {
    console.log(req.body); // Para verificar el contenido del cuerpo de la solicitud

    // Extraer datos del cuerpo de la solicitud
    const {
      Nombre_Usuario,
      Apellido_Usuario,
      Cedula,
      Email_Usuario,
      Contraseña_Usuario,
      Telefono_Usuario,
      Bicolones,
      ID_Direccion, // Agregado por la relación foránea
    } = req.body;

    // Crear el nuevo usuario
    const usuario = await Usuario.create({
      Nombre_Usuario,
      Apellido_Usuario,
      Cedula,
      Email_Usuario,
      Contraseña_Usuario,
      Telefono_Usuario,
      Bicolones,
      ID_Direccion,
    });

    // Enviar respuesta con el usuario creado
    res.status(201).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el Usuario.', detalles: error.errors });
  }
};






const actualizarUsuario = async (req, res) => {
  try {
    console.log(req.body); // Para depurar datos recibidos

    const { id } = req.params;
    const {
      Nombre_Usuario,
      Apellido_Usuario,
      Cedula,
      Email_Usuario,
      Contraseña_Usuario,
      Telefono_Usuario,
      Bicolones,
      ID_Direccion,
    } = req.body;

    // Buscar el usuario por su ID
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    // Actualizar el usuario
    await usuario.update({
      Nombre_Usuario,
      Apellido_Usuario,
      Cedula,
      Email_Usuario,
      Contraseña_Usuario,
      Telefono_Usuario,
      Bicolones,
      ID_Direccion,
    });

    res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el Usuario.' });
  }
};




  // Eliminar un Usuario
  const eliminarUsuario = async (req, res) => {
    try {
    const { id } = req.params;
    const Usuarios = await Usuario.findByPk(id);
    if (!Usuarios) return res.status(404).json({ error: 'Usuario no encontrado.' });

    await Usuarios.destroy();
    res.status(204).send(); 
    
    } catch (error) {
    console.error(error);    
    res.status(500).json({ error: 'Ooops Error al eliminar al Usuario.' });
    }
  };



  
  module.exports = { obtenerUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario };