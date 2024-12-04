import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { PostLogin } from "../services/userServices";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function FormLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loguearUsuario = async (event) => {
    event.preventDefault();
    

    //Llama al servicio del Login
    try { 
      const response = await PostLogin({
          Email_Usuario: email, 
          Contraseña_Usuario: password
      });


      if (response && response.token) {
        // Guardamos el token en el SessionStorage
        sessionStorage.setItem("token", response.token);


        // Extraemos el rol del usuario de la respuesta
        const rolUsuario = response.rol_usuario;

  
        toast.success("¡Inicio de sesión exitoso!");



        // Redirigimos según el rol
        if (rolUsuario === 'Administrador') {
          navigate("/Administrador");
        } else if (rolUsuario === 'usuario') {
          navigate("/PerfilUsuario");
        } else if (rolUsuario === 'Recofi') {
          navigate("/Recofi");
        } else {
          toast.error("Rol de usuario no reconocido");
        }
      } else {
        toast.error(response.message || "Error en el inicio de sesión.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      toast.error("Ocurrió un error al iniciar sesión");
    }
  };





  return (
    <div className='parentContainer'>
      <Container className='ctn-principal'>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={6}>
            <h2 className="text-center mb-4">Ecofi</h2>
            <Form onSubmit={loguearUsuario}>
              <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="button-register">
                Iniciar sesión
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
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

      <div className='informativeContainer'>
        <p>🌍 ¡Bienvenido a EcoFi! <br /> <br />
          🌱¡Gracias por unirte a nuestra comunidad verde! <br />
         🌿Ahora que eres parte de EcoFi, cada acción de reciclaje te acerca a un mundo más sostenible 💚 <br />
         💰¡Empecemos a reciclar y a transformar el planeta juntos! 🌍✨</p>
      </div>
    </div>
  );
}
