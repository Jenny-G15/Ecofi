const {usuario} = require ('../models');


// Llamar al usuario:
const obtenerUsuarios = async (req, res) => {
    try {
      const usuarios = await usuario.findAll(); 
      res.status(200).json(usuarios);
    } catch (error) {
      console.error(error); // Imprimir error
      res.status(500).json({ error: 'Error al obtener los usuarios.' });
    }
  };


  //Crear nuevo usuario

  const crearUsuario = async (req, res) => {
    try {
      console.log(req.body); 
      const { Nombre_usuario, Apellido } = req.body;
      const usuario = await usuario.create({
        Nombre_usuario,
        Apellido,
      });
      res.status(201).json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el usuario.' });
    }
  };
  


  const actualizarUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const { Nombre_usuario,Apellido } = req.body;
      const usuarios = await usuario.findByPk(id);
    if (!usuarios) return res.status(404).json({ error: 'usuarios no encontrado.' });

    await usuarios.update({ Nombre_usuario,Apellido });
    res.status(200).json(usuarios);

    } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario.' });

    }

  };


  
  const eliminarUsuario = async (req, res) => {
    try {
    const { id } = req.params;
    const usuarios = await usuario.findByPk(id);
    if (!usuarios) return res.status(404).json({ error: 'usuario no encontrado.' });

    await usuarios.destroy();
    res.status(204).send(); 
    
    } catch (error) {
    console.error(error);    
    res.status(500).json({ error: 'Ooops Error al eliminar al usuario.' });
    }
  };



  
  module.exports = { obtenerUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario };