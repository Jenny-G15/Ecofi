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
      console.log(req.body); 
  
      const { Bicolones, Nombre_Usuario, Apellido_Usuario, Cedula, Email_usuario, Contraseña_Usuario,
        Telefono_Usuario} = req.body;
  
      const usuario = await Usuario.create({
        Bicolones,
        Nombre_Usuario,
        Apellido_Usuario,
        Cedula,
        Email_usuario,
        Contraseña_Usuario,
        Telefono_Usuario
      });
  
      // Enviar la respuesta con el Usuario creado
      res.status(201).json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el Usuario.' });
    }
  };
  


  // Actualizar un Usuario existente

  const actualizarUsuario = async (req, res) => {
    try {
      console.log(req.body); 
      const { id } = req.params;
      const  { Bicolones, Nombre_Usuario, Apellido_Usuario, Cedula, Email_usuario, Contraseña_Usuario,
        Telefono_Usuario} = req.body;
      const Usuarios = await Usuario.findByPk(id);
    if (!Usuarios) return res.status(404).json({ error: 'Usuarios no encontrado.' });

    await Usuarios.update({ Bicolones, Nombre_Usuario, Apellido_Usuario, Cedula, Email_usuario, Contraseña_Usuario,
      Telefono_Usuario});
    res.status(200).json(Usuarios);

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