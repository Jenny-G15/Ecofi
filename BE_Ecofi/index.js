require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models'); // Importa la conexión a la base de datos
const authRoutes = require('./Routes/authRoutes'); // Importa las rutas de usuarios
const canjesRoutes = require('./Routes/canjesRoutes');
const direccionRoutes = require('./Routes/direccionRoutes');
const emprendedorRoutes = require('./Routes/emprendedorRoutes');
const formularioRoutes = require('./Routes/formularioRoutes')
const HCanjeRoutes= require('./Routes/HCanjeRoutes');
const HRecoleccionesRoutes = require('.//Routes/HRecoleccionesRoutes');
const materialRoutes= require('./Routes/materialRoutes');
const monederoRoutes = require('./Routes/monederoRoutes');
const productosRoutes = require('./Routes/productosRoutes');
const recofiRoutes = require('./Routes/recofiRoutes');

const app = express();

app.use(cors())
const PORT = process.env.PORT;

// Token
// app.use('/auth', authRoutes);

app.use(express.json()); // Middleware para parsear JSON

// Probar la conexión con la base de datos
sequelize.authenticate()
    		.then(() => console.log('Conexión con la base de datos exitosa.'))
    		.catch((error) => console.error('No se pudo conectar a la base de datos: ', error))
        
// Usar las rutas de usuarios
app.use('/usuarios', authRoutes);
app.use('/canjes', canjesRoutes);
app.use('/direccion', direccionRoutes);
app.use('/emprendedores', emprendedorRoutes);
app.use('/formularios', formularioRoutes);
app.use('/historialC', HCanjeRoutes);
app.use('/recoleccion', HRecoleccionesRoutes);
app.use('/material', materialRoutes);
app.use('/monedero', monederoRoutes );
app.use('/producto', productosRoutes);``
app.use('/recofi', recofiRoutes);



// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
});