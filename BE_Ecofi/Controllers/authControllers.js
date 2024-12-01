const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models'); 
const jwtSecret = process.env.JWT_SECRET;
const jwtExpiresIn = process.env.JWT_EXPIRES_IN;
const emailjs = require('emailjs-com'); 







const obtenerUsuarios = async (req, res) => {
    try {
      const usuario = await Usuario.findAll(); 
      res.status(200).json(usuario);
  
    } catch (error) {
      console.error(error); // Imprimir error
      res.status(500).json({ error: 'Error al obtener la Dirección.' });
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



// Función para iniciar sesión (login)
const iniciarSesion = async (req, res) => {
    const { Nombre_Usuario,  Contraseña_Usuario } = req.body;

    try {
        
        const usuario = await Usuario.findOne({ where: { Nombre_Usuario} });
        if (!usuario) {
            return res.status(401).json({ message: 'Credenciales incorrectas.' });
        }

        
        const esContraseñaValida = await bcrypt.compare( Contraseña_Usuario, usuario.Contraseña_Usuario);
        if (!esContraseñaValida) {
            return res.status(401).json({ message: 'Credenciales incorrectas.' });
        }

        //Crear el token segun las credenciales digitadas
        const token = jwt.sign(
            {
                id: usuario.id,
                Nombre_Usuario: usuario.Nombre_Usuario,
                Contraseña_Usuario: usuario.Contraseña_Usuario,
            },
            jwtSecret,
            { expiresIn: jwtExpiresIn }
        );

        res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión.' });
    }
};



// Función para enviar el correo de recuperación
const forgotPassword = async (req, res) => {
    const { Email_Usuario } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { Email_Usuario } });

        if (!usuario) {
            return res.status(404).json({ message: 'El correo no está registrado.' });
        }

        const resetToken = jwt.sign({ email: usuario.Email_Usuario }, jwtSecret, { expiresIn: '1h' });

        const resetURL = `http://localhost:3000/reset-password/${resetToken}`;

        try {
            await emailjs.send(
                "TU_SERVICE_ID",
                "TU_TEMPLATE_ID",
                { to_email: usuario.Email_Usuario, reset_link: resetURL },
                "TU_USER_ID"
            );

            res.status(200).json({ message: 'Correo de recuperación enviado.' });
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).json({ message: 'Error al enviar el correo.' });
        }
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ message: 'Error al procesar la solicitud.' });
    }
};




// Función para restablecer la contraseña
const resetPassword = async (req, res) => {

    const { token, nuevaContraseña } = req.body;

    try {
        const decoded = jwt.verify(token, jwtSecret);

        const usuario = await Usuario.findOne({ where: { Email_Usuario: decoded.email } });

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        const contrasenaEncriptada = await bcrypt.hash(nuevaContraseña, 10);

        usuario.Contraseña_Usuario = contrasenaEncriptada;
        await usuario.save();

        res.status(200).json({ message: 'Contraseña restablecida exitosamente.' });
    } catch (error) {
        console.error('Error al restablecer la contraseña:', error);

        
        if (error.name === 'TokenExpiredError') {
            return res.status(400).json({ message: 'El token ha expirado.' });
        }

        res.status(500).json({ message: 'Error al restablecer la contraseña.' });
    }
};




module.exports = { obtenerUsuarios, registrarUsuario, iniciarSesion,forgotPassword, resetPassword };



