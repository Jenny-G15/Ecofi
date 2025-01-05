# Ecofi: Plataforma de Reciclaje

Ecofi es una aplicación que promueve el reciclaje en comunidades, ofreciendo un sistema de puntos que los usuarios pueden canjear por productos y descuentos de emprendedores locales. El objetivo es fomentar prácticas sostenibles y apoyar economías locales mediante una plataforma accesible y sencilla.

---

## Índice

1. Tecnologías utilizadas
2. Características
3. Estructura del Proyecto
4. Endpoints del Backend
5. Instalación y Configuración
6. Contribuciones
7. Licencia

---

## 1. Tecnologías Utilizadas

### Backend

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework para la creación de APIs.
- **Sequelize**: ORM para la gestión de la base de datos.
- **MySQL2**: Cliente para conectarse a bases de datos MySQL.
- **jsonwebtoken**: Manejo de autenticación con tokens.
- **dotenv**: Manejo de variables de entorno.
- **bcrypt/bcryptjs**: Encriptación de contraseñas.

### Frontend

- **React.js**: Biblioteca para la construcción de interfaces de usuario.
- **CSS**: Estilización de componentes.
- **Bootstrap**: Biblioteca para estilos responsivos y componentes.
- **React-Bootstrap**: Integración de Bootstrap con React.
- **Leaflet y React-Leaflet**: Mapas interactivos para la localización de puntos de reciclaje.
- **Chart.js y React-Chartjs-2**: Generación de gráficos dinámicos.
- **React-Slick y Slick-Carousel**: Carruseles para mostrar contenido destacado.
- **React-Toastify**: Notificaciones dinámicas.
- **Firebase**: Gestión de autenticación y base de datos en tiempo real.
- **EmailJS**: Envío de correos desde el cliente.
- **jspdf**: Generación de documentos PDF.
- **UUID**: Generación de identificadores únicos.

### Otros

- **Git**: Control de versiones.
- **Postman**: Pruebas de endpoints.
- **VSCode**: Entorno de desarrollo.

---

## 2. Características

- Registro e inicio de sesión con autenticación segura.
- Gestión de materiales reciclables.
- Sistema de puntos por recolección y canje de productos.
- Guía de reciclaje para fomentar prácticas correctas.
- Mapa interactivo para localizar puntos de reciclaje.
- Panel de control para emprendedores locales.
- Generación de reportes en PDF.
- Notificaciones dinámicas para alertas importantes.

---

## 3. Estructura del Proyecto

```plaintext
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
```

---

## 4. Endpoints del Backend

### Autenticación

- **POST /api/auth/login**: Inicia sesión y genera un token JWT.
- **POST /api/auth/register**: Registra un nuevo usuario.

### Usuarios

- **GET /api/usuarios/:id**: Obtiene información de un usuario.
- **PUT /api/usuarios/:id**: Actualiza información de un usuario.

### Materiales

- **GET /api/materiales**: Lista los materiales reciclables.
- **POST /api/materiales**: Añade un nuevo material.

### Canjes

- **GET /api/canjes**: Lista los canjes realizados.
- **POST /api/canjes**: Crea un nuevo canje.

### Productos

- **GET /api/productos**: Obtiene todos los productos.
- **POST /api/productos**: Crea un nuevo producto.
- **PUT /api/productos/:id**: Actualiza un producto existente.
- **DELETE /api/productos/:id**: Elimina un producto.

### Centros de Recolección (Recofis)

- **GET /api/recofis**: Lista todos los puntos de recolección.
- **POST /api/recofis**: Crea un nuevo punto de recolección.
- **PUT /api/recofis/:id**: Actualiza la información de un punto de recolección.
- **DELETE /api/recofis/:id**: Elimina un punto de recolección.

---

## 5. Instalación y Configuración

### Requisitos Previos

- Node.js y npm instalados.
- Base de datos MySQL configurada.

### Pasos

1. Clona el repositorio:

   ```bash
   git clone https://github.com/usuario/ecofi.git
   ```

2. Configura las variables de entorno:

   Crea un archivo `.env` basado en `.env.example` y proporciona los valores requeridos.

3. Instala las dependencias:

   ```bash
   cd BE_Ecofi
   npm install
   cd ../FE_Ecofi
   npm install
   ```

4. Realiza las migraciones de la base de datos:

   ```bash
   cd BE_Ecofi
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```

5. Inicia los servidores:

   ```bash
   cd BE_Ecofi
   npm start
   cd ../FE_Ecofi
   npm start
   ```

---

## 6. Contribuciones

¡Las contribuciones son bienvenidas! Sigue estos pasos para contribuir:

1. Realiza un fork del repositorio.

2. Crea una nueva rama para tu funcionalidad o corrección:

   ```bash
   git checkout -b nombre-rama
   ```

3. Haz tus cambios y realiza commits claros y descriptivos.

4. Envía un pull request detallado.

---

## 7. Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

## Notas Adicionales

- El diseño de la plataforma incluye un enfoque inclusivo, utilizando un lenguaje accesible para comunidades de clase baja.
- El sistema de puntos está basado en imágenes que relacionan materiales reciclables con sus respectivas equivalencias en puntos.
- Se han implementado medidas de seguridad para prevenir ataques comunes como XS, validaciones, encriptado de contraseñas, evitar inyecciones SQL utilizando Sequelize correctamente. 


