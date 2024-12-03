// src/server.js

const express = require('express');
const multer = require('multer');
const bucket = require('./firebase');  // Importamos la configuración de Firebase

const app = express();

// Middleware para procesar el formulario con archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Ruta para manejar la subida de productos
app.post('/upload', upload.single('image'), async (req, res) => {
  const { name, price, description } = req.body;  // Datos del producto
  const imageFile = req.file;  // El archivo de imagen

  if (!imageFile) {
    return res.status(400).send('No se ha subido ninguna imagen.');
  }

  try {
    // Subimos la imagen a Firebase Storage
    const blob = bucket.file(Date.now() + '-' + imageFile.originalname);
    const blobStream = blob.createWriteStream({
      resumable: false,
      contentType: imageFile.mimetype,
    });

    blobStream.on('error', (err) => {
      res.status(500).send('Error al subir la imagen.');
    });

    blobStream.on('finish', () => {
      // Obtenemos la URL pública de la imagen
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      
      // Aquí debes guardar el producto en tu base de datos (si es necesario)
      res.status(200).send({
        message: 'Producto creado exitosamente',
        imageUrl: publicUrl,
      });
    });

    blobStream.end(imageFile.buffer);  // Subir el archivo
  } catch (error) {
    console.error('Error al procesar la imagen:', error);
    res.status(500).send('Error al procesar la imagen.');
  }
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
