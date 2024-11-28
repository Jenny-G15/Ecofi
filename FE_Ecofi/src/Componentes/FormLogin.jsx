import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import getUsers from '../services/GetUsers';
import "../styles/Login.css"
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function FormLogin() {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loguearUsuario = async (event) => {
    event.preventDefault();

    try {
      let users = await getUsers();
      let userExist = users.find((user) => user.email ===  email && user.password === password);

      if (userExist) {
        toast.success("¡Inicio de sesión exitoso!"); 
        navigate("/Principal");
      } else {
        toast.error("Email o contraseña incorrectos"); 
      }
    } catch (error) {
      console.log("Fallo el try", error);
      toast.error("Ocurrió un error al iniciar sesión"); 
    }

    console.log('Email:', email);
    console.log('Password:',password, );
  };

  return (
    <div>
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

              <Button variant="primary" type="submit" className="buttonInicio">
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
