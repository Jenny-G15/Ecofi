const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models'); 
const { jwtSecret, jwtExpiresIn } = require('../config'); 


const registrarUsuario = async (req, res) => {
    const { Nombre_Usuario, Contraseña_Usuario, role } = req.body; 

    try {
       
        const usuarioExistente = await Usuario.findOne({ where: {Nombre_Usuario } });
        if (usuarioExistente) {
            return res.status(400).json({ message: 'El nombre de usuario ya está en uso.' });
        }

        
        const contrasenaUser = await bcrypt.hash(Contraseña_Usuario, 10);

        
        const nuevoUsuario = await Usuario.create({
            Nombre_Usuario,
            Contraseña_Usuario: contrasenaUser,
            role: role || 'user', 
        });

      
        const token = jwt.sign(
            {
                id: nuevoUsuario.id,
                Nombre_Usuario: nuevoUsuario.Nombre_Usuario,
                role: nuevoUsuario.role,
            },
            jwtSecret,
            { expiresIn: jwtExpiresIn }
        );

        res.status(201).json({ message: 'Usuario registrado exitosamente', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar el usuario.' });
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

        
        const esContraseñaValida = await bcrypt.compare( Contraseña_Usuario, usuario. Contraseña_Usuario);
        if (!esContraseñaValida) {
            return res.status(401).json({ message: 'Credenciales incorrectas.' });
        }

        const token = jwt.sign(
            {
                id: usuario.id,
                Nombre_Usuario: usuario.Nombre_Usuario,
                role: usuario.role,
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
