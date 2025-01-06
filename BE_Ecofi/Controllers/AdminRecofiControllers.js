const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { AdminRecofis } = require('../models');
const jwtSecret = process.env.JWT_SECRET;
const jwtExpiresIn = process.env.JWT_EXPIRES_IN;




// Obtener todos los administradores
const getAdminRecofis = async (req, res) => {
  try {
    const administradores = await AdminRecofis.findAll();
    return res.status(200).json(administradores);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al obtener los administradores.' });
  }
};


// Obtener administrador por correo
const AdminRecofisPorCorreo = async (req, res) => {
  try {
    const { correo } = req.params;

    if (!correo) {
      return res.status(400).json({ error: 'Correo es requerido.' });
    }

    const administrador = await AdminRecofis.findOne({ where: { Correo_AdminRecofis: correo } });

    if (!administrador) {
      return res.status(404).json({ error: 'Administrador no encontrado.' });
    }

    return res.status(200).json(administrador);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al obtener el administrador por correo.' });
  }
};



// Registrar un nuevo administrador
const postAdminRecofis = async (req, res) => {
  const { 
    Nombre_AdminRecofis, 
    Apellido_AdminRecofis, 
    Correo_AdminRecofis, 
    Contraseña_AdminRecofis, 
    Telefono_AdminRecofis 
  } = req.body;

  try {
    // Verificar si ya existe un administrador con el mismo correo
    const adminExistente = await AdminRecofis.findOne({ where: { Correo_AdminRecofis } });

    if (adminExistente) {
      return res.status(400).json({ error: 'El correo ya está registrado.' });
    }

    // Encriptar la contraseña
    const contraseñaEncriptada = await bcrypt.hash(Contraseña_AdminRecofis, 10);

    // Crear el nuevo administrador de Recofis
    const nuevoAdmin = await AdminRecofis.create({
      Nombre_AdminRecofis,
      Apellido_AdminRecofis,
      Correo_AdminRecofis,
      Contraseña_AdminRecofis: contraseñaEncriptada,
      Telefono_AdminRecofis,
    });

    return res.status(201).json({ message: 'Administrador registrado exitosamente.', administrador: nuevoAdmin });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al registrar el administrador.' });
  }
};

// Iniciar sesión como administrador de Recofis
const iniciarSesionAdminRecofis = async (req, res) => {
  const { Correo_AdminRecofis, Contraseña_AdminRecofis } = req.body;

  if (!Correo_AdminRecofis || !Contraseña_AdminRecofis) {
    return res.status(400).json({ message: 'Faltan datos de inicio de sesión.' });
  }

  try {
    const admin = await AdminRecofis.findOne({ where: { Correo_AdminRecofis } });

    if (!admin) {
      return res.status(401).json({ message: 'Credenciales incorrectas.' });
    }

    const esContraseñaValida = await bcrypt.compare(Contraseña_AdminRecofis, admin.Contraseña_AdminRecofis);

    if (!esContraseñaValida) {
      return res.status(401).json({ message: 'Credenciales incorrectas.' });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        Correo_AdminRecofis: admin.Correo_AdminRecofis,
      },
      jwtSecret,
      { expiresIn: jwtExpiresIn }
    );

    return res.status(200).json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al iniciar sesión.' });
  }
};




// Actualizar datos de un administrador
const actualizarAdminRecofis = async (req, res) => {
  const { id } = req.params;
  const { Nombre_AdminRecofis, Apellido_AdminRecofis, Correo_AdminRecofis, Contraseña_AdminRecofis, Telefono_AdminRecofis } = req.body;

  try {
    const admin = await AdminRecofis.findByPk(id);

    if (!admin) {
      return res.status(404).json({ error: 'Administrador no encontrado.' });
    }

    const UpdateData = {
      Nombre_AdminRecofis,
      Apellido_AdminRecofis,
      Correo_AdminRecofis,
      Telefono_AdminRecofis,
    };

    if (Contraseña_AdminRecofis) {
      UpdateData.Contraseña_AdminRecofis = await bcrypt.hash(Contraseña_AdminRecofis, 10);
    }

    await admin.update(UpdateData);

    return res.status(200).json({ message: 'Administrador actualizado exitosamente.', administrador: admin });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al actualizar el administrador.' });
  }
};

// Eliminar un administrador de REcofis
const eliminarAdminRecofis = async (req, res) => {
  const { id } = req.params;

  try {
    const admin = await AdminRecofis.findByPk(id);

    if (!admin) {
      return res.status(404).json({ error: 'Administrador no encontrado.' });
    }

    await admin.destroy();

    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al eliminar el administrador.' });
  }
};

module.exports = {
  getAdminRecofis,
  AdminRecofisPorCorreo,
  postAdminRecofis,
  iniciarSesionAdminRecofis,
  actualizarAdminRecofis,
  eliminarAdminRecofis,
};