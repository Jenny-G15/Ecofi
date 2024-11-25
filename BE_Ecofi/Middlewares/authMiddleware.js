const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config'); 


const verificarToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; 
    
    if (!token) {
        return res.status(403).json({ message: 'Token no proporcionado.' });
    }

    try {
        // Verificar el token usando la clave secreta
        jwt.verify(token, jwtSecret, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Token no válido.' });
            }
            
            req.usuario = decoded;
            next(); 
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error al verificar el token.' });
    }
};

module.exports = {
    verificarToken,
};
