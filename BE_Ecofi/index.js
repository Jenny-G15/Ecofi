const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Importar las rutas de autenticación
const authRoutes = require('./Routes/authRoutes');

// Middlewares
app.use(cors());
app.use(bodyParser.json());  

// Definir las rutas de autenticación
app.use('/auth', authRoutes);  


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
