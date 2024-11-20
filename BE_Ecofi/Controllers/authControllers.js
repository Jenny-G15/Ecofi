const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiresIn } = require(' .. /config');
const { Usuario } = require('../models');

const iniciarSesion = async (req, res) => {
    const { username, password } = req.body;
    
    try {
    // Buscar el usuario por su nombre de usuario
    const usuario = await Usuario.findOne({ where: {  } });
    
    if (!usuario) {
    return res.status(401).json({ message: 'Credenciales incorrectas.' });
}
  

// Aquí deberías comparar la contraseña proporcionada con la almacenada

const esContraseñaValida = await bcrypt.compare(password, usuario.password); // Asegurate de tener bcrypt instalado

if (!esContraseñaValida) {
return res.status(401).json({ message: 'Credenciales incorrectas.' });
}


// Generar el token JWT
const token = jwt.sign({ id: usuario.id, username: usuario.username }, jwtSecret, {
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

