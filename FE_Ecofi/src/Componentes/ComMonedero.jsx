import React, { useEffect, useState } from "react";
import { getUsers, updateUser } from "../services/userServices";
import "../styles/Perfil_Usuario.css";
import { jwtDecode } from "jwt-decode";

const ComMonedero = () => {
  // Inicializa los estados del componente
  const [IdEditando, setIdEditando] = useState("");
  const [Nombre_Usuario, setNombre] = useState("");
  const [Apellido_Usuario, setApellido] = useState("");
  const [Email_Usuario, setEmail] = useState("");
  const [Telefono_Usuario, setTelefono] = useState("");
  const [Bicolones, setBicolones] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const token = sessionStorage.getItem("token");

  // Función para obtener los datos del usuario
  const fetchUserData = async () => {
    try {
      if (!token) {
        setError("No se encontró un inicio de sesión válido, inicie sesión.");
        setIsLoading(false);
        return;
      }

      // Obtiene datos de usuarios
      const userData = await getUsers();
      // Decodifica el token del usuario
      const decodedToken = jwtDecode(token);
      // Encuentra el usuario correspondiente
      const usuario = userData.find((user) => user.id === decodedToken.id);

      if (usuario) {
        // Establece los estados con los datos del usuario
        setIdEditando(usuario.id);
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
      console.error("Error en fetchUserData:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Llamar a fetchUserData al cargar el componente
  useEffect(() => {
    fetchUserData();
  }, []);

  // Función para manejar la edición del perfil
  const ManejarEdicion = () => {
    setIsEditing(true);
  };

  // Función para guardar los cambios en el perfil del usuario
  const GuardarEdicion = async (id) => {
    try {
      const actualizarUsuario = {
        Nombre_Usuario,
        Apellido_Usuario,
        Email_Usuario,
        Telefono_Usuario,
      };

      await updateUser(id, actualizarUsuario);
      setIsEditing(false); // Esto desactivará el modo de edición
    } catch (err) {
      setError("Error al guardar los cambios.");
      console.error("Error al actualizar el perfil:", err);
    }
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="profile-container">
      {error && <p className="error-message">{error}</p>}
      <h2 className="profile-name">Bienvenido! {Nombre_Usuario}</h2>
      <h3> 🌎 Se parte de la solución 🌎</h3>
      <p>Nombre: {Nombre_Usuario}</p>
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
          <p>Teléfono: {Telefono_Usuario}</p>
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
