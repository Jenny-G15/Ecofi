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
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
