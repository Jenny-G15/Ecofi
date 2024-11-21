const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiresIn } = require('../config');
const { Usuario } = require('../models');

const iniciarSesion = async (req, res) => {
    const { Nombre_Usuario,  Contraseña_Usuario} = req.body;
    
    try {
        // Buscar el usuario por su nombre de usuario
        const usuario = await Usuario.findOne({ where: { Nombre_Usuario} });
        
        if (!usuario) {
            return res.status(401).json({ message: 'Credenciales incorrectas.' });
        }
      
        // Comparar la contraseña proporcionada con la almacenada
        const esContraseñaValida = await bcrypt.compare( Contraseña_Usuario, usuario.password);
        
        if (!esContraseñaValida) {
            return res.status(401).json({ message: 'Credenciales incorrectas.' });
        }

        // Generar el token JWT
        const token = jwt.sign({ id: usuario.id, Nombre_Usuario: usuario.Nombre_Usuario }, jwtSecret, {
            expiresIn: jwtExpiresIn,
        });

        res.status(200).json({ token }); // Devolver el token al cliente
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión.' });
    }
};

module.exports = {
    iniciarSesion,
};
