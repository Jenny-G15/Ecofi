// src/firebase.js

const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json');  // Cambia la ruta al archivo de credenciales

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'YOUR_PROJECT_ID.appspot.com',  // Sustituye con tu ID de proyecto de Firebase
});

const bucket = admin.storage().bucket();

module.exports = bucket;
