import React, { useState, useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { PostLogin } from "../services/userServices";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ContextoEcofi from './Context/EcofiContex';





export default function FormLogin() {
  // const { setUserData } = useContext(ContextoEcofi); // Usar el contexto
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
      sessionStorage.setItem("token", response.token); 
      console.log('RESPUESTA: ', response);
      
        // // Establecer el estado con la información correcta
        // setUserData({ 
        //   token: response.token,          // Guardar el token en el estado
        //   // rol_usuario: response.rol_usuario // Si necesitas el rol también
        // });
        
        // Redirigir según el rol
        if (response.rol_usuario === 'usuario') {
          navigate("/Perfil");
        } else {
          toast.error("Rol de usuario no reconocido");
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

              <Button variant="primary" type="submit">
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
    </div>
  );
}
