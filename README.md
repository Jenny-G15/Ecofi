## Ecofi: Plataforma de Reciclaje


- Ecofi es una aplicación que promueve el reciclaje en comunidades, ofreciendo un sistema de puntos que los usuarios pueden canjear por productos y descuentos de emprendedores locales. El objetivo es fomentar prácticas sostenibles y apoyar economías locales mediante una plataforma accesible y sencilla.

## Índice

- 1.Tecnologías utilizadas
- 2.Características
- 3.Estructura del Proyecto
- 4.Endpoints del Backend
- 5.Instalación y Configuración
- 6.Contribuciones
- 7.Licencia
- 8.Tecnologías utilizadas


## Backend

- Node.js: Entorno de ejecución para JavaScript.
- Express.js: Framework para la creación de APIs.
- Sequelize: ORM para la gestión de la base de datos.
- MySQL2: Cliente para conectarse a bases de datos MySQL.
- jsonwebtoken: Manejo de autenticación con tokens.
- dotenv: Manejo de variables de entorno.
- bcrypt/bcryptjs: Encriptación de contraseñas.


## Frontend

- React.js: Biblioteca para la construcción de interfaces de usuario.
- CSS: Estilización de componentes.

## Otros

- Git: Control de versiones.
- Postman: Pruebas de endpoints.
- VSCode: Entorno de desarrollo.


## Características

- Registro e inicio de sesión con autenticación segura.
- Gestión de materiales reciclables.
- Sistema de puntos por recolección y canje de productos.
- Mapa interactivo para localizar puntos de reciclaje.
- Panel de control para emprendedores locales.


# Estructura del Proyecto

Ecofi/
├── BE_Ecofi/                 # Backend
│   ├── config/               # Configuración de la base de datos
│   ├── Controllers/          # Controladores para cada funcionalidad
│   ├── Middlewares/          # Middlewares de autenticación y validación
│   ├── Models/               # Modelos de la base de datos (Sequelize)
│   ├── Routes/               # Rutas de la API
│   ├── Migrations/           # Migraciones de la base de datos
│   ├── seeders/              # Datos iniciales
│   └── db.js                 # Configuración de Sequelize
│
├── FE_Ecofi/                 # Frontend
│   ├── public/               # Archivos estáticos
│   ├── src/
│   │   ├── Componentes/      # Componentes React
│   │   ├── assets/           # Imágenes y estilos
│   │   └── App.jsx           # Punto de entrada de React
│
├── .env                      # Variables de entorno
├── package.json              # Dependencias del proyecto
└── README.md                 # Documentación


## Endpoints del Backend


Autenticación
POST /api/auth/login: Inicia sesión y genera un token JWT.
POST /api/auth/register: Registra un nuevo usuario.

Usuarios
GET /api/usuarios/:id: Obtiene información de un usuario.
PUT /api/usuarios/:id: Actualiza información de un usuario.

Materiales
GET /api/materiales: Lista los materiales reciclables.
POST /api/materiales: Añade un nuevo material.

Canjes
GET /api/canjes: Lista los canjes realizados.
POST /api/canjes: Crea un nuevo canje.

