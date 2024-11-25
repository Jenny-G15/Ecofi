const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models'); 
const { jwtSecret, jwtExpiresIn } = require('../config'); 

const registrarUsuario = async (req, res) => {

    const { Nombre_Usuario,
         Apellido_Usuario, 
         Cedula, 
         Email_usuario,
         Contraseña_Usuario,
         Telefono_Usuario } = req.body; 

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
            Email_usuario,
            Contraseña_Usuario: contrasenaUser, // Guardar la contraseña encriptada
            Telefono_Usuario
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

module.exports = {
    registrarUsuario,
    iniciarSesion,
};
