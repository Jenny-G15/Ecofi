import React, { useEffect, useState } from "react";
import { getUsers, updateUser, deleteUser } from "../services/userServices"; 
import '../styles/Editusuarios.css';





const TablaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]); // Lista de usuarios
  const [editandoUsuarioId, setEditandoUsuarioId] = useState(null); // ID del usuario que se está editando
  const [formularioEditarUsuario, setFormularioEditarUsuario] = useState({
    Nombre_Usuario: '',
    Apellido_Usuario: '',
    Cedula: '',
    Email_Usuario: '',
    Contraseña_Usuario: '',
    Telefono_Usuario: '',
    Bicolones: 0,
  });

  useEffect(() => {
    cargarUsuarios();
  }, []);

  // Función para obtener y cargar los usuarios desde la API
  const cargarUsuarios = async () => {
    try {
      const data = await getUsers(); // Obtener todos los usuarios
      setUsuarios(data); // Actualizar la lista de usuarios
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    }
  };

  // Función para iniciar la edición de un usuario
  const iniciarEdicion = (usuario) => {
    setEditandoUsuarioId(usuario.id); // Establecer el ID del usuario en edición
    setFormularioEditarUsuario(usuario); // Rellenar el formulario con los datos del usuario
  };

  // Función para manejar los cambios en los campos de texto del formulario
  const EditInput = (event) => {
    const { name, value } = event.target;
    setFormularioEditarUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Función para manejar los cambios en los campos numéricos del formulario
  const manejarCambioNumerico = (event) => {
    const { name, value } = event.target;
    setFormularioEditarUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Función para guardar los cambios del usuario
  const guardarCambios = async (id) => {
    try {
      await updateUser(id, formularioEditarUsuario); // Actualizar el usuario en la API
      setEditandoUsuarioId(null); // Salir del modo de edición
      cargarUsuarios(); // Recargar la lista de usuarios
    } catch (error) {
      console.error("Error al guardar usuario:", error);
    }
  };

  // Función para cancelar la edición del usuario
  const cancelarEdicion = () => {
    setEditandoUsuarioId(null); // Salir del modo de edición
  };

  // Función para eliminar un usuario
  const eliminarUsuario = async (id) => {
    try {
      await deleteUser(id); // Eliminar el usuario en la API
      cargarUsuarios(); // Recargar la lista de usuarios
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  return (
    <div id="tabla-administrar-usuarios">
      <h1>Administrar Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cédula</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Bicolones</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id} id={`fila-${usuario.id}`}>
              {editandoUsuarioId === usuario.id ? (
                <>
                  <td data-label="Nombre">
                    <input
                      id="editar-nombre"
                      type="text"
                      name="Nombre_Usuario"
                      value={formularioEditarUsuario.Nombre_Usuario}
                      onChange={EditInput}
                    />
                  </td>
                  <td data-label="Apellido">
                    <input
                      id="editar-apellido"
                      type="text"
                      name="Apellido_Usuario"
                      value={formularioEditarUsuario.Apellido_Usuario}
                      onChange={EditInput}
                    />
                  </td>
                  <td data-label="Cédula">
                    <input
                      id="editar-cedula"
                      type="number"
                      name="Cedula"
                      value={formularioEditarUsuario.Cedula}
                      onChange={manejarCambioNumerico}
                    />
                  </td>
                  <td data-label="Correo">
                    <input
                      id="editar-email"
                      type="email"
                      name="Email_Usuario"
                      value={formularioEditarUsuario.Email_Usuario}
                      onChange={EditInput}
                    />
                  </td>
                  <td data-label="Teléfono">
                    <input
                      id="editar-telefono"
                      type="number"
                      name="Telefono_Usuario"
                      value={formularioEditarUsuario.Telefono_Usuario}
                      onChange={manejarCambioNumerico}
                    />
                  </td>
                  <td data-label="Bicolones">
                    <input
                      id="editar-bicolones"
                      type="number"
                      name="Bicolones"
                      value={formularioEditarUsuario.Bicolones}
                      onChange={manejarCambioNumerico}
                    />
                  </td>
                  <td data-label="Acciones">
                    <button id="guardar-boton" onClick={() => guardarCambios(usuario.id)}>
                      Guardar
                    </button>
                    <button id="cancelar-boton" onClick={cancelarEdicion}>
                      Cancelar
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td data-label="Nombre" id="celda-nombre">{usuario.Nombre_Usuario}</td>
                  <td data-label="Apellido" id="celda-apellido">{usuario.Apellido_Usuario}</td>
                  <td data-label="Cédula" id="celda-cedula">{usuario.Cedula}</td>
                  <td data-label="Correo" id="celda-email">{usuario.Email_Usuario}</td>
                  <td data-label="Teléfono" id="celda-telefono">{usuario.Telefono_Usuario}</td>
                  <td data-label="Bicolones" id="celda-bicolones">{usuario.Bicolones}</td>
                  <td data-label="Acciones">
                    <button id="editar-boton" onClick={() => iniciarEdicion(usuario)}>
                      Editar
                    </button>
                    <button id="eliminar-boton" onClick={() => eliminarUsuario(usuario.id)}>
                      Eliminar
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuarios;








