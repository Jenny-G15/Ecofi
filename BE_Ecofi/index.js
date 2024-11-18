const express = require('express');
const { sequelize } = require('./models'); // Importa la conexión a la base de datos
const usuarioRoutes = require('./Routes/usuarioRoutes'); // Importa las rutas de usuarios


const app = express();
const PORT = 3000;



//Token
// app.use('/auth', authRoutes);





app.use(express.json()); // Middleware para parsear JSON

// Probar la conexión con la base de datos
sequelize.authenticate()
    		.then(() => console.log('Conexión con la base de datos exitosa.'))
    		.catch((error) => console.error('No se pudo conectar a la base de datos: ', error))
        
// Usar las rutas de usuarios
app.use('/usuarios', usuarioRoutes);




// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

