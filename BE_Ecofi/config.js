require('dotenv').config(); // Cargar las variables de entorno

module.exports = {
    jwtSecret: process.env.JWT_SECRET, // Clave secreta desde .env
    jwtExpiresIn: process.env.JWT_EXPIRES_IN, // Tiempo de expiración desde .env
}