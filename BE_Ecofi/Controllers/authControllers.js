const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models'); 
const jwtSecret = process.env.JWT_SECRET;
const jwtExpiresIn = process.env.JWT_EXPIRES_IN;

const obtenerUsuarios= async (req, res) => {
  try {
   
      const usuarios = await Usuario.findAll(); 
      if (!usuarios) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
      } else {
        return res.status(200).json(usuarios);
      }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los usuarios.' });
  }

  res.status(200).json({});
};

const obtenerUsuariosxCedula = async (req, res) => {
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los usuarios.' });
  }
};
  

const registrarUsuario = async (req, res) => {

    const { Nombre_Usuario, Apellido_Usuario, Cedula, Email_Usuario, Contraseña_Usuario, Telefono_Usuario,
         Bicolones, Rol_Usuario } = req.body; 

    try {
        // Verifica si el usuario ya existe en la base de datos por su cédula
        const usuarioExistente = await Usuario.findOne({ where: { Cedula } });

        if (usuarioExistente) {
            return res.status(400).json({ message: 'El número de cédula asociado ya existe.' });
        }

        // Encripta la contraseña antes de guardarla
        const contrasenaUser = await bcrypt.hash(Contraseña_Usuario, 10);

        // Crea un nuevo usuario
        const nuevoUsuario = await Usuario.create({
            Nombre_Usuario,
            Apellido_Usuario,
            Cedula,
            Email_Usuario,
            Contraseña_Usuario: contrasenaUser, // Guardar la contraseña encriptada
            Telefono_Usuario,
            Bicolones,
            Rol_Usuario
        });

        // Retorna una respuesta exitosa
        res.status(201).json({ message: 'Usuario registrado exitosamente', usuario: nuevoUsuario });
    } catch (error) {

        // En caso de error, enviar respuesta con el código de estado 500
        console.error(error);
        res.status(500).json({ message: 'Error al registrar el usuario.', error: error.message });
    }
};


const iniciarSesion = async (req, res) => {
    console.log(req.body); // Verificar qué datos llegan

    // Asegurarse de que los datos están en el formato correcto
    const datos = req.body.Email_Usuario;
    const Email_Usuario = datos?.Email_Usuario || req.body.Email_Usuario;
    const Contraseña_Usuario = datos?.Contraseña_Usuario || req.body.Contraseña_Usuario;

    // Verificar que ambos datos sean proporcionados
    if (!Email_Usuario || !Contraseña_Usuario) {
        return res.status(400).json({ message: 'Faltan datos de inicio de sesión.' });
    }

    try {
        // Buscar el usuario por su correo electrónico
        const usuario = await Usuario.findOne({ where: { Email_Usuario } });

        if (!usuario) {
            return res.status(401).json({ message: 'Credenciales incorrectas.' });
        }

        // Verificar la contraseña
        const esContraseñaValida = await bcrypt.compare(Contraseña_Usuario, usuario.Contraseña_Usuario);

        if (!esContraseñaValida) {
            return res.status(401).json({ message: 'Credenciales incorrectas.' });
        }

        // Generar el token
        const token = jwt.sign(
            {
                id: usuario.id,
                Email_Usuario: usuario.Email_Usuario,
                Rol_Usuario: usuario.Rol_Usuario,
            },
            jwtSecret,
            { expiresIn: jwtExpiresIn }
        );

        // Responder con éxito
        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token,
            rol_usuario: usuario.Rol_Usuario
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión.' });
    }
};

const actualizarUsuario = async (req, res) => {
    try {
        
      console.log(req.body);
      const { id } = req.params;
      const { Nombre_Usuario, Apellido_Usuario, Cedula, Email_Usuario, Contraseña_Usuario, Telefono_Usuario, Bicolones, Rol_Usuario } = req.body;
  
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
        Nombre_Usuario,
        Apellido_Usuario,
        Cedula,
        Email_Usuario,
        Contraseña_Usuario,
        Telefono_Usuario,
        Bicolones,
        Rol_Usuario
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


module.exports = { obtenerUsuarios, obtenerUsuariosxCedula, registrarUsuario, iniciarSesion, eliminarUsuario, actualizarUsuario};



