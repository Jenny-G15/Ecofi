import React, { useEffect, useState } from "react";
import { getUsers } from "../services/userServices";
import "../styles/Perfil_Usuario.css";
import { jwtDecode } from "jwt-decode";

const ComMonedero = () => {
  const [Nombre_Usuario, setNombre] = useState("");
  const [Apellido_Usuario, setApellido] = useState("");
  const [Cedula, setCedula] = useState("");
  const [Email, setEmail] = useState("");
  const [Bicolones, setBicolones] = useState(0);
  const [error, setError] = useState(null);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener lista de usuarios
        const userData = await getUsers();

        // Decodificar token
        if (token) {
          const decodedToken = jwtDecode(token);
          const usuario = userData.find((user) => user.id === decodedToken.id);

          if (usuario) {
            setNombre(usuario.nombre);
            setApellido(usuario.apellido);
            setCedula(usuario.cedula);
            setEmail(usuario.email);
            setBicolones(usuario.bicolones);
          } else {
            setError("No se encontró el perfil del usuario.");
          }
        } else {
          setError("No se encontró un token válido en sessionStorage.");
        }
      } catch (error) {
        setError("Error al cargar los datos del usuario.");
      }
    };

    fetchData();
  }, [token]); // Token como dependencia para asegurar consistencia

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="profile-container">
      <h2 className="profile-title">Soy parte de la solución</h2>
      <h3 className="profile-name">
        {Nombre_Usuario} {Apellido_Usuario}
      </h3>
      <p>Nombre: {Nombre_Usuario}</p>
      <p>Apellido: {Apellido_Usuario}</p>
      <p>Email: {Email}</p>
      <div className="profileContainer">
        <h3 className="profile-ecoins">{Bicolones}</h3>
        <p className="profile-ecoins-label">Bicolones disponibles</p>
      </div>
      <div className="profileStats">
        <div className="profile-stat-box">
          <p>Ganados en total</p>
          <h4>0</h4>
        </div>
        <div className="profile-stat-box">
          <p>Canjeados</p>
          <h4>0</h4>
        </div>
        <div className="profile-stat-box">
          <p>Recibidos</p>
          <h4>0</h4>
        </div>
      </div>
      <div>
        <button className="profile-button-blue">Cambiar Contraseña</button>
      </div>
    </div>
  );
};

export default ComMonedero;


