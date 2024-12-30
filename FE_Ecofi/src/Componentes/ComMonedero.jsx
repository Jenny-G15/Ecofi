import React, { useEffect, useState } from "react";
import { getUsers, updateUser } from "../services/userServices";
import "../styles/Perfil_Usuario.css";
import { jwtDecode } from "jwt-decode"; // Corrección de la importación

const ComMonedero = () => {
  const [IdEditando, setIdEditando] = useState("");
  const [Nombre_Usuario, setNombre] = useState("");
  const [Apellido_Usuario, setApellido] = useState("");
  const [Email_Usuario, setEmail] = useState("");
  const [Telefono_Usuario, setTelefono] = useState("");
  const [Bicolones, setBicolones] = useState(0);
  const [error, setError] = useState(null); // Estado para errores
  const [isLoading, setIsLoading] = useState(true); // Estado de carga
  const [isEditing, setIsEditing] = useState(false); // Estado para modo de edición

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          setError("No se encontró un token válido en sessionStorage.");
          setIsLoading(false); // Terminar carga
          return;
        }

        // Obtener lista de usuarios
        const userData = await getUsers();

        // Decodificar token
        const decodedToken = jwtDecode(token);

        // Buscar usuario correspondiente
        const usuario = userData.find((user) => user.id === decodedToken.id);
       

        if (usuario) {
          setIdEditando(usuario.id)
          setNombre(usuario.Nombre_Usuario);
          setApellido(usuario.Apellido_Usuario);
          setEmail(usuario.Email_Usuario);
          setTelefono(usuario.Telefono_Usuario);
          setBicolones(usuario.Bicolones);
        } else {
          setError("No se encontró el perfil del usuario.");
        }
      } catch (err) {
        setError("Error al cargar los datos del usuario.");
        console.error("Error en fetchData:", err);
      } finally {
        setIsLoading(false); // Finalizar estado de carga
      }
    };

    fetchData();
  }, [token]);

  console.log('ID QUE SE VA A EDITAR',IdEditando);
  
  //maneja la edición del perfil
  const ManejarEdicion = () => {
    setIsEditing(true);
  };

  // maneja el guardado de los cambios
  const GuardarEdicion = async (id) => {
    try {
      const actualizarUsuario = {
        Nombre_Usuario, // Incluye todos los campos necesarios
        Apellido_Usuario,
        Email_Usuario,
        Telefono_Usuario
      };
  
      await updateUser(id, actualizarUsuario);

      // Cambiar a modo de vista
      setIsEditing(false);
      
    } catch (err) {
      setError("Error al guardar los cambios.");
      console.error("Error al actualizar el perfil:", err);
    }
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  //datos del usuario
  return (
    <div className="profile-container">
      {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error */}
      <h2 className="profile-name">
        Bienvenido! {Nombre_Usuario} </h2>
        <h3>🌱 Se parte de la solucion 🌱</h3>
      <p>Nombre: {Nombre_Usuario}</p>

      {/* Mostrar formulario de edición solo si está en modo de edición */}
      {isEditing ? (
        <div>
          <label>
            Apellido:
            <input
              type="text"
              value={Apellido_Usuario}
              onChange={(e) => setApellido(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={Email_Usuario}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Teléfono:
            <input
              type="text"
              value={Telefono_Usuario}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </label>
          <br />
          <button onClick={() => GuardarEdicion(IdEditando)}>Guardar Cambios</button>
        </div>
      ) : (
        <div>
          <p>Apellido: {Apellido_Usuario}</p>
          <p>Email: {Email_Usuario}</p>
          <p>Telefono: {Telefono_Usuario}</p>
        </div>
      )}

      <div className="profileContainer">
        <p className="profile-ecoins-label">Bicolones disponibles: {Bicolones}</p>
      </div>

      <div>
        <button className="profile-button-blue" onClick={ManejarEdicion}>
          Editar Perfil
        </button>
      </div>
    </div>
  );
};

export default ComMonedero;
