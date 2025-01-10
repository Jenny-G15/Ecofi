const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

const verificarToken = (req, res, next) => {
    // Obtener el token del header de autorización
    const token = req.headers['authorization']?.split(' ')[1]; 
    
    // Si no hay token, responde con un error
    if (!token) {
        return res.status(403).json({ 
            success: false, 
            message: 'Token no proporcionado. Asegúrate de estar autenticado.' 
        });
    }

    try {
        // Verificar el token con la clave secreta
        jwt.verify(token, jwtSecret, (err, decoded) => {
            if (err) {
                // Si el token ha expirado o es inválido
                const errorMessage = err.name === 'TokenExpiredError' 
                    ? 'El token ha expirado. Por favor, inicia sesión nuevamente.'
                    : 'Token no válido.';
                return res.status(401).json({ 
                    success: false, 
                    message: errorMessage 
                });
            }

            // Guardar los datos decodificados del token en la solicitud
            req.usuario = decoded;
            next(); // Pasar al siguiente middleware o controlador
        });
    } catch (error) {
        // Manejo de errores inesperados
        console.error('Error al verificar el token:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Error interno al procesar el token.' 
        });
    }
};

module.exports = {
    verificarToken,
};


