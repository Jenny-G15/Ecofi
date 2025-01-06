require('dotenv').config();
const express = require('express');
const cors = require('cors');
const xss = require('xss-clean');
const { sequelize } = require('./models'); 
const authRoutes = require('./Routes/authRoutes'); 
const canjesRoutes = require('./Routes/canjesRoutes');
const direccionRoutes = require('./Routes/direccionRoutes');
const emprendedorRoutes = require('./Routes/emprendedorRoutes');
const formularioRoutes = require('./Routes/formularioRoutes');
const HCanjeRoutes = require('./Routes/HCanjeRoutes');
const HRecoleccionesRoutes = require('./Routes/HRecoleccionesRoutes');
const materialRoutes = require('./Routes/materialRoutes');
const monederoRoutes = require('./Routes/monederoRoutes');
const productosRoutes = require('./Routes/productosRoutes');
const recofiRoutes = require('./Routes/recofiRoutes');
const AdminRecofiRoutes = require('./Routes/AdminRecofiRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Configuración de CORS para permitir cookies
app.use(cors({
    origin: 'http://192.168.8.108:3000',
    credentials: true, // Permite el envío de cookies
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.json()); // Middleware para parsear JSON
app.use(xss()); // Middleware de xss-clean para prevenir ataques XSS

// Probar la conexión con la base de datos
sequelize.authenticate()
    .then(() => console.log('Conexión con la base de datos exitosa.'))
    .catch((error) => console.error('No se pudo conectar a la base de datos: ', error));

// Usar las rutas de usuarios
app.use('/usuarios', authRoutes);
app.use('/canjes', canjesRoutes);
app.use('/direccion', direccionRoutes);
app.use('/emprendedores', emprendedorRoutes);
app.use('/formularios', formularioRoutes);
app.use('/historialC', HCanjeRoutes);
app.use('/recoleccion', HRecoleccionesRoutes);
app.use('/material', materialRoutes);
app.use('/monedero', monederoRoutes);
app.use('/producto', productosRoutes);
app.use('/recofi', recofiRoutes);
app.use('/adminRecofi', AdminRecofiRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
});
