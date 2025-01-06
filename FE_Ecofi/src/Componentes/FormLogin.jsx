import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { PostLogin } from "../services/userServices";
import { postLoginAdmin } from "../services/AdminRecofis"; 
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContextoEcofi from './Context/EcofiContex';
import Cookies from 'js-cookie'; // Importar js-cookie
import "../styles/Login.css";

export default function FormLogin() {
  const { login } = useContext(ContextoEcofi);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const loguearUsuario = async (event) => {
    event.preventDefault();

    try {
      const response = await PostLogin({
        Email_Usuario: email,
        Contraseña_Usuario: password
      });

      if (response && response.token) {
        // Guardamos el token en una cookie en lugar de sessionStorage
        Cookies.set('auth_token', response.token, { expires: 1/24, secure: true, sameSite: 'Strict' }); // Caduca en 1 hora
        console.log('RESPUESTA: ', response);

        // Guarda el rol del usuario en el estado del contexto
        if (response.rol_usuario === 'usuario') {
          login(response.rol_usuario, response.token); // Enviar token al contexto también
          navigate("/Perfil");
        } else if (response.rol_usuario === 'Administrador') {
          login(response.rol_usuario, response.token);
          navigate("/Administracion");
        } else {
          // Aquí es donde realizas el cambio
          const adminResponse = await postLoginAdmin(email, password); // Pasa los parámetros individualmente

          if (adminResponse.token) {
            sessionStorage.setItem("token", adminResponse.token);
            login("Recofi");
            navigate("/Formulario");
          } else {
            toast.error("Rol de usuario no reconocido o sin permisos");
          }
        }
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      toast.error("Ocurrió un error al iniciar sesión");
    }
  };

  return (
    <div id="login-container">
      <div id="login-box">
        <h2 id="login-subtitle">Ecofi</h2>
        <Form id="login-form" onSubmit={loguearUsuario}>
          <Form.Group className="mb-3">
            <Form.Label className="login-form-label">Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-form-input"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="login-form-label">Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-form-input"
            />
          </Form.Group>

          <Button id="login-button" type="submit">
            Iniciar sesión
          </Button>
        </Form>
      </div>

      <div id="login-info">
        <p>🌍 ¡Bienvenido a EcoFi! <br /><br />
          🌱 ¡Gracias por unirte a nuestra comunidad verde! <br />
          🌿 Ahora que eres parte de EcoFi, cada acción de reciclaje te acerca a un mundo más sostenible 💚 <br />
          💰 ¡Empecemos a reciclar y a transformar el planeta juntos! 🌍✨
        </p>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}



// import React, { useState, useContext } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { PostLogin } from "../services/userServices";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ContextoEcofi from './Context/EcofiContex';
// import "../styles/login.css";

// export default function FormLogin() {
//   const { login } = useContext(ContextoEcofi);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const loguearUsuario = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await PostLogin({
//         Email_Usuario: email,
//         Contraseña_Usuario: password
//       });

//       if (response && response.token) {
//         sessionStorage.setItem("token", response.token);
//         console.log('RESPUESTA: ', response);

//         if (response.rol_usuario === 'usuario') {
//           login(response.rol_usuario);
//           navigate("/Perfil");
//         } else if (response.rol_usuario === 'Administrador') {
//           login(response.rol_usuario);
//           navigate("/Administracion");
//         } else if (response.rol_usuario === 'Recofi') {
//           login(response.rol_usuario);
//           navigate("/Formulario");
//         } else {
//           toast.error("Rol de usuario no reconocido");
//         }
//       }
//     } catch (error) {
//       console.error("Error al iniciar sesión:", error);
//       toast.error("Ocurrió un error al iniciar sesión");
//     }
//   };

//   return (
//     <div id="login-container">
//       <div id="login-box">
//         <h2 id="login-subtitle">Ecofi</h2>
//         <Form id="login-form" onSubmit={loguearUsuario}>
//           <Form.Group className="mb-3">
//             <Form.Label  className="login-form-label">Correo Electrónico</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Ingresa tu correo"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="login-form-input" // Agrega esta clase
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label  className="login-form-label">Contraseña</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Ingresa tu contraseña"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="login-form-input" // Agrega esta clase
//             />
//           </Form.Group>

//           <Button id="login-button" type="submit">
//             Iniciar sesión
//           </Button>
//         </Form>
//       </div>

//       <div id="login-info">
//         <p>🌍 ¡Bienvenido a EcoFi! <br /><br />
//           🌱 ¡Gracias por unirte a nuestra comunidad verde! <br />
//           🌿 Ahora que eres parte de EcoFi, cada acción de reciclaje te acerca a un mundo más sostenible 💚 <br />
//           💰 ¡Empecemos a reciclar y a transformar el planeta juntos! 🌍✨
//         </p>
//       </div>

//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//     </div>
//   );
// }