const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Importar las rutas de autenticación
const authRoutes = require('./Routes/authRoutes');
const usuarioRoutes = require('./Routes/usuarioRoutes');



// Middlewares
app.use(cors());
app.use(bodyParser.json());  

// Definir las rutas de autenticación
app.use('/auth', authRoutes);  
app.use('/usuario', usuarioRoutes);


const PORT = process.env.PORT || 3000;
<<<<<<< HEAD
=======

app.use(express.json()); // Middleware para parsear JSON

// Probar la conexión con la base de datos
sequelize.authenticate()
    		.then(() => console.log('Conexión con la base de datos exitosa.'))
    		.catch((error) => console.error('No se pudo conectar a la base de datos: ', error))
        
// Usar las rutas de usuarios
app.use('/usuarios', usuarioRoutes);
app.use('/canjes', canjesRoutes);
app.use('/direccion', direccionRoutes);
app.use('/emprendedores', emprendedorRoutes);
app.use('/formularios', formularioRoutes);
app.use('/historialC', HCanjeRoutes);
app.use('/recoleccion', HRecoleccionesRoutes);
app.use('/material', materialRoutes);
app.use('/monedero', monederoRoutes );
app.use('/producto', productosRoutes);
app.use('/recofi', recofiRoutes);



// Iniciar el servidor
>>>>>>> 7691c9484147dacf91e49333ec5cca8ddb0e93de
=======
>>>>>>> cdc6f70e6404195699a08b30e314ec3a14b30f15
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
});
