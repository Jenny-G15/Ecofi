
import React, { useEffect, useState } from "react";
import { getUsers, updateUser, deleteUser } from "../services/userServices"; 
import '../styles/Editusuarios.css';

const TablaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [editandoUsuarioId, setEditandoUsuarioId] = useState(null);
  const [formularioEditarUsuario, setFormularioEditarUsuario] = useState({});

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const data = await getUsers();
      setUsuarios(data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    }
  };

  const iniciarEdicion = (usuario) => {
    setEditandoUsuarioId(usuario.id);
    setFormularioEditarUsuario(usuario);
  };

  const EditInput = (event) => {
    const { name, value } = event.target;
    setFormularioEditarUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const manejarCambioNumerico = (event) => {
    const { name, value } = event.target;
    setFormularioEditarUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const guardarCambios = async (id) => {
    try {
      await updateUser(
        id,
        formularioEditarUsuario.Nombre_Usuario,
        formularioEditarUsuario.Apellido_Usuario,
        formularioEditarUsuario.Cedula,
        formularioEditarUsuario.Email_Usuario,
        formularioEditarUsuario.Contraseña_Usuario,
        formularioEditarUsuario.Telefono_Usuario,
        formularioEditarUsuario.Bicolones
      );
      setEditandoUsuarioId(null);
      cargarUsuarios();
    } catch (error) {
      console.error("Error al guardar usuario:", error);
    }
  };

  const cancelarEdicion = () => {
    setEditandoUsuarioId(null);
  };

  const eliminarUsuario = async (id) => {
    try {
      await deleteUser(id);
      cargarUsuarios();
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
                  <td><input id="editar-nombre" type="text" name="Nombre_Usuario" value={formularioEditarUsuario.Nombre_Usuario} onChange={EditInput} /></td>
                  <td><input id="editar-apellido" type="text" name="Apellido_Usuario" value={formularioEditarUsuario.Apellido_Usuario} onChange={EditInput} /></td>
                  <td><input id="editar-cedula" type="number" name="Cedula" value={formularioEditarUsuario.Cedula} onChange={manejarCambioNumerico} /></td>
                  <td><input id="editar-email" type="email" name="Email_Usuario" value={formularioEditarUsuario.Email_Usuario} onChange={EditInput} /></td>
                  <td><input id="editar-telefono" type="number" name="Telefono_Usuario" value={formularioEditarUsuario.Telefono_Usuario} onChange={manejarCambioNumerico} /></td>
                  <td><input id="editar-bicolones" type="number" name="Bicolones" value={formularioEditarUsuario.Bicolones} onChange={manejarCambioNumerico} /></td>
                  <td>
                    <button id="guardar-boton" onClick={() => guardarCambios(usuario.id)}>Guardar</button>
                    <button id="cancelar-boton" onClick={cancelarEdicion}>Cancelar</button>
                  </td>
                </>
              ) : (
                <>
                  <td id="celda-nombre">{usuario.Nombre_Usuario}</td>
                  <td id="celda-apellido">{usuario.Apellido_Usuario}</td>
                  <td id="celda-cedula">{usuario.Cedula}</td>
                  <td id="celda-email">{usuario.Email_Usuario}</td>
                  <td id="celda-telefono">{usuario.Telefono_Usuario}</td>
                  <td id="celda-bicolones">{usuario.Bicolones}</td>
                  <td>
                    <button id="editar-boton" onClick={() => iniciarEdicion(usuario)}>Editar</button>
                    <button id="eliminar-boton" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
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






































// import React, { useEffect, useState } from "react";
// import { getUsers, updateUser, deleteUser } from "../services/userServices"; 
// import '../styles/Editusuarios.css';




// const TablaUsuariosAdmin = () => {
//   const [usuarios, setUsuarios] = useState([]);
//   const [editandoUsuarioId, setEditandoUsuarioId] = useState(null);
//   const [formularioEditarUsuario, setFormularioEditarUsuario] = useState({});



//   useEffect(() => {
//     cargarUsuarios();
//   }, []);

//   const cargarUsuarios = async () => {
//     try {
//       const data = await getUsers();
//       setUsuarios(data);
//     } catch (error) {
//       console.error("Error al cargar usuarios:", error);
//     }
//   };

//   const iniciarEdicion = (usuario) => {
//     setEditandoUsuarioId(usuario.id);
//     setFormularioEditarUsuario(usuario);
//   };



//   const EditInput = (event) => {
//     const nombreCampo = event.target.name;
//     const valorCampo = event.target.value;

//     if (nombreCampo === "Nombre_Usuario") {
//       setFormularioEditarUsuario({
//         Nombre_Usuario: valorCampo,
//         Apellido_Usuario: formularioEditarUsuario.Apellido_Usuario,
//         Cedula: formularioEditarUsuario.Cedula,
//         Email_Usuario: formularioEditarUsuario.Email_Usuario,
//         Contraseña_Usuario: formularioEditarUsuario.Contraseña_Usuario,
//         Telefono_Usuario: formularioEditarUsuario.Telefono_Usuario,
//         Bicolones: formularioEditarUsuario.Bicolones,
//       });
//     } else if (nombreCampo === "Apellido_Usuario") {
//       setFormularioEditarUsuario({
//         Nombre_Usuario: formularioEditarUsuario.Nombre_Usuario,
//         Apellido_Usuario: valorCampo,
//         Cedula: formularioEditarUsuario.Cedula,
//         Email_Usuario: formularioEditarUsuario.Email_Usuario,
//         Contraseña_Usuario: formularioEditarUsuario.Contraseña_Usuario,
//         Telefono_Usuario: formularioEditarUsuario.Telefono_Usuario,
//         Bicolones: formularioEditarUsuario.Bicolones,
//       });
//     }
//   };



//   const manejarCambioNumerico = (event) => {
//     const nombreCampo = event.target.name;
//     const valorCampo = event.target.value;

//     if (nombreCampo === "Cedula") {
//       setFormularioEditarUsuario({ ...formularioEditarUsuario, Cedula: valorCampo });
//     } else if (nombreCampo === "Telefono_Usuario") {
//       setFormularioEditarUsuario({ ...formularioEditarUsuario, Telefono_Usuario: valorCampo });
//     } else if (nombreCampo === "Bicolones") {
//       setFormularioEditarUsuario({ ...formularioEditarUsuario, Bicolones: valorCampo });
//     }
//   };

//   const guardarCambios = async (id) => {
//     try {
//       await updateUser(
//         id,
//         formularioEditarUsuario.Nombre_Usuario,
//         formularioEditarUsuario.Apellido_Usuario,
//         formularioEditarUsuario.Cedula,
//         formularioEditarUsuario.Email_Usuario,
//         formularioEditarUsuario.Contraseña_Usuario,
//         formularioEditarUsuario.Telefono_Usuario,
//         formularioEditarUsuario.Bicolones
//       );
//       setEditandoUsuarioId(null);
//       cargarUsuarios();
//     } catch (error) {
//       console.error("Error al guardar usuario:", error);
//     }
//   };



//   const cancelarEdicion = () => {
//     setEditandoUsuarioId(null);
//   };

//   const eliminarUsuario = async (id) => {
//     try {
//       await deleteUser(id);
//       cargarUsuarios();
//     } catch (error) {
//       console.error("Error al eliminar usuario:", error);
//     }
//   };

//   return (
//     <div id="tabla-administrar-usuarios">
//       <h1>Administrar Usuarios</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Nombre</th>
//             <th>Apellido</th>
//             <th>Cédula</th>
//             <th>Correo</th>
//             <th>Teléfono</th>
//             <th>Bicolones</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {usuarios.map((usuario) => (
//             <tr key={usuario.id} id={`fila-${usuario.id}`}>
//               {editandoUsuarioId === usuario.id ? (
//                 <>
//                   <td><input id="editar-nombre" type="text" name="Nombre_Usuario" value={formularioEditarUsuario.Nombre_Usuario} onChange={EditInput} /></td>
//                   <td><input id="editar-apellido" type="text" name="Apellido_Usuario" value={formularioEditarUsuario.Apellido_Usuario} onChange={EditInput} /></td>
//                   <td><input id="editar-cedula" type="number" name="Cedula" value={formularioEditarUsuario.Cedula} onChange={manejarCambioNumerico} /></td>
//                   <td>{usuario.Email_Usuario}</td>
//                   <td><input id="editar-telefono" type="number" name="Telefono_Usuario" value={formularioEditarUsuario.Telefono_Usuario} onChange={manejarCambioNumerico} /></td>
//                   <td><input id="editar-bicolones" type="number" name="Bicolones" value={formularioEditarUsuario.Bicolones} onChange={manejarCambioNumerico} /></td>
//                   <td>
//                     <button id="guardar-boton" onClick={() => guardarCambios(usuario.id)}>Guardar</button>
//                     <button id="cancelar-boton" onClick={cancelarEdicion}>Cancelar</button>
//                   </td>
//                 </>
//               ) : (
//                 <>
//                   <td id="celda-nombre">{usuario.Nombre_Usuario}</td>
//                   <td id="celda-apellido">{usuario.Apellido_Usuario}</td>
//                   <td id="celda-cedula">{usuario.Cedula}</td>
//                   <td id="celda-email">{usuario.Email_Usuario}</td>
//                   <td id="celda-telefono">{usuario.Telefono_Usuario}</td>
//                   <td id="celda-bicolones">{usuario.Bicolones}</td>
//                   <td>
//                     <button id="editar-boton" onClick={() => iniciarEdicion(usuario)}>Editar</button>
//                     <button id="eliminar-boton" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
//                   </td>
//                 </>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TablaUsuariosAdmin;
