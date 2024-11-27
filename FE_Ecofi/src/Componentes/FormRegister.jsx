import React, { useState, useEffect } from "react";
import "../Styles/Register.css";
import { postUser } from "../Services/post";
import { getUsers } from "../Services/get";
import { useNavigate } from "react-router-dom";

const FormularioRegistro = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Estados para la lógica de registro
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };
    fetchUsers();
  }, []);

  const avanzarPaso = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const retrocederPaso = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const guardarUser = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!username || !email || !password || !confirmPassword) {
      setMessage("No dejes campos en blanco");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden");
      return;
    }

    const validarUser = users.find((user) => user.correo === email);

    if (validarUser) {
      setMessage("El correo ya está registrado");
      return;
    }

    try {
      const UsuarioFresa = {
        nombre: username,
        correo: email,
        password: password,
      };

      await postUser(UsuarioFresa);
      setMessage("¡Registro exitoso!");
      navigate("/login");

      // Reinicia los campos del formulario
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error en el Registro", error);
      setMessage("Error al registrar el usuario");
    }
  };

  return (
    <div className="containerRegistro">
      <div>
        <h6>BIENVENIDO A ECOFI</h6>
      </div>
      <header>Formulario de Registro</header>
      <div className="barraProgresoRegistro">
        {["Información", "Contacto", "Confirmar"].map((etiqueta, idx) => (
          <div
            className={`pasoRegistro ${currentStep > idx ? "activo" : ""}`}
            key={idx}
          >
            <p>{etiqueta}</p>
            <div className="balaRegistro">
              <span>{idx + 1}</span>
            </div>
            <div className="checkRegistro fas fa-check"></div>
          </div>
        ))}
      </div>
      <div className="formularioExteriorRegistro">
        <form onSubmit={guardarUser}>
          {/* Paso 1 */}
          {currentStep === 1 && (
            <div className="paginaRegistro">
              <div className="tituloRegistro">Información Básica</div>
              <div className="campoRegistro">
                <label className="etiquetaRegistro">Nombre:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="campoRegistro">
                <button
                  type="button"
                  className="botonRegistro"
                  onClick={avanzarPaso}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}
          {/* Paso 2 */}
          {currentStep === 2 && (
            <div className="paginaRegistro">
              <div className="tituloRegistro">Información de Contacto</div>
              <div className="campoRegistro">
                <label className="etiquetaRegistro">Correo Electrónico:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="campoRegistro botonesRegistro">
                <button
                  type="button"
                  className="botonRegistro anteriorRegistro"
                  onClick={retrocederPaso}
                >
                  Anterior
                </button>
                <button
                  type="button"
                  className="botonRegistro"
                  onClick={avanzarPaso}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}
          {/* Paso 3 */}
          {currentStep === 3 && (
            <div className="paginaRegistro">
              <div className="tituloRegistro">Confirmar Datos</div>
              <div className="campoRegistro">
                <label className="etiquetaRegistro">Contraseña:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="campoRegistro">
                <label className="etiquetaRegistro">Confirmar Contraseña:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="campoRegistro botonesRegistro">
                <button
                  type="button"
                  className="botonRegistro anteriorRegistro"
                  onClick={retrocederPaso}
                >
                  Anterior
                </button>
                <button type="submit" className="botonRegistro enviarRegistro">
                  Enviar
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
      {message && <div className="mensajeRegistro">{message}</div>}
    </div>
  );
};

export default FormularioRegistro;
