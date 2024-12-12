const { Usuario } = require ('../models');



const obtenerUsuarios = async (req, res) => {
  try {
    const { cedula } = req.params; 

    if (cedula) {
      const usuario = await Usuario.findOne({ where: { Cedula: cedula } }); // Asegúrate de que el campo en la base de datos se llama "Cedula"
      
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
      } else {
        return res.status(200).json(usuario);
      }
      
    }
    
    // const usuarios = await Usuario.findAll();
    // return res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los usuarios.' });
  }
};





// Llamar al Usuario:
// const obtenerUsuarios = async (req, res) => {
//   try {
//     const usuarios = await Usuario.findAll(); 
//     res.status(200).json(usuarios);

//   } catch (error) {
//     console.error(error); // Imprimir error
//     res.status(500).json({ error: 'Error al obtener los usuarios.' });
//   }
// };




// Crear un nuevo usuario
const crearUsuario = async (req, res) => {
    try {
      console.log(req.body);
  
      const { Nombre_Usuario, Apellido_Usuario, Cedula, Email_Usuario, Contraseña_Usuario, Telefono_Usuario, Bicolones } = req.body;
  
      // Validar que no exista un usuario con la misma cédula, correo o teléfono
      const usuarios = await Usuario.findAll();
      for (let usuario of usuarios) {
        if (
          usuario.Cedula === Cedula || 
          usuario.Email_Usuario === Email_Usuario || 
          usuario.Telefono_Usuario === Telefono_Usuario
        ) {
          return res.status(400).json({ error: 'Ya existe un usuario con la misma cédula, correo o teléfono.' });
        }
      }
  
      // Crear el nuevo usuario si no hay coincidencias
      const usuario = await Usuario.create({
        Nombre_Usuario,
        Apellido_Usuario,
        Cedula,
        Email_Usuario,
        Contraseña_Usuario,
        Telefono_Usuario,
        Bicolones,
      });
  
      // Respuesta con el usuario creado
      res.status(201).json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el usuario.' });
    }
  };
  


  const actualizarUsuario = async (req, res) => {
    try {
        
      console.log(req.body);
      const { id } = req.params;
      const { Bicolones, Nombre_Usuario, Apellido_Usuario, Cedula, Email_Usuario, Contraseña_Usuario, Telefono_Usuario } = req.body;
  
      // Buscar el usuario por su ID
      const usuario = await Usuario.findByPk(id);
      if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado.' });
  
      // Validar que no exista otro usuario con la misma cédula o email
      const usuarios = await Usuario.findAll();
      for (let otroUsuario of usuarios) {
        if (
          otroUsuario.id !== usuario.id && // Asegurarse de que no sea el mismo usuario
          (otroUsuario.Cedula === Cedula || otroUsuario.Email_Usuario === Email_Usuario)
        ) {
          return res.status(400).json({ error: 'Ya existe otro usuario con la misma cédula o correo.' });
        }
      }
  
      // Actualizar los datos del usuario
      await usuario.update({
        Bicolones,
        Nombre_Usuario,
        Apellido_Usuario,
        Cedula,
        Email_Usuario,
        Contraseña_Usuario,
        Telefono_Usuario,
      });
  
      // Responder con el usuario actualizado
      res.status(200).json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el usuario.' });
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