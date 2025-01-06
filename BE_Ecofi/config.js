require('dotenv').config(); // Cargar las variables de entorno

module.exports = {
    jwtSecret: process.env.JWT_SECRET, // Clave secreta desde .env
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h', // Tiempo de expiración del token
    cookieOptions: {
        httpOnly: true, // Evita el acceso al cookie desde JavaScript del cliente
        secure: process.env.NODE_ENV === 'production', // Solo en HTTPS en producción
        sameSite: 'Strict', // Evita el envío del cookie a otros sitios
        maxAge: 3600000, // 1 hora en milisegundos
    },
};
