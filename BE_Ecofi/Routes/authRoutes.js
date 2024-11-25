const express = require('express');
const router = express.Router();
const { iniciarSesion, registrarUsuario } = require('../Controllers/authControllers');


router.post('/login', iniciarSesion);
router.post('/register', registrarUsuario);

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const { verificarToken } = require('../middlewares/authMiddleware');

// // Ruta protegida, solo accesible si se tiene un token válido
// router.get('/perfil', verificarToken, (req, res) => {
//     // La solicitud llega aquí solo si el token es válido
//     res.status(200).json({ message: 'Acceso autorizado', usuario: req.usuario });
// });

// module.exports = router;
