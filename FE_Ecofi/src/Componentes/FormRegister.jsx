import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBRow, MDBCol, MDBCheckbox } from 'mdb-react-ui-kit';
// import { postUser } from '../Services/post';
// import { getUsers } from "../Services/get";
// import { useNavigate } from "react-router-dom";
import '../Styles/Registro.css';


import { useNavigate } from 'react-router-dom';

function FormRegistro() {
  const [bicolones, setBicolones] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [apellidoUsuario, setApellidoUsuario] = useState('');
  const [cedula, setCedula] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

}

























<MDBContainer fluid className='my-5'>
<MDBRow className='g-0 justify-content-center'>
  <MDBCol md='8'>
    <MDBCard className='my-5'>
      <MDBCardBody className='p-5 shadow-5 text-center'>
        <h2 className="fw-bold mb-5">Registro</h2>

        <form onSubmit={guardarUser}>
          <MDBRow>
            <MDBCol md='6'>
              <MDBInput
                label='Nombre'
                id='nombreUsuario'
                type='text'
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
                required
              />
            </MDBCol>
            <MDBCol md='6'>
              <MDBInput
                label='Apellido'
                id='apellidoUsuario'
                type='text'
                value={apellidoUsuario}
                onChange={(e) => setApellidoUsuario(e.target.value)}
                required
              />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md='6'>
              <MDBInput
                label='Cédula'
                id='cedula'
                type='number'
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
                required
              />
            </MDBCol>
            <MDBCol md='6'>
              <MDBInput
                label='Bicolones'
                id='bicolones'
                type='number'
                value={bicolones}
                onChange={(e) => setBicolones(e.target.value)}
                required
              />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md='6'>
              <MDBInput
                label='Email'
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </MDBCol>
            <MDBCol md='6'>
              <MDBInput
                label='Teléfono'
                id='telefono'
                type='number'
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
              />
            </MDBCol>
          </MDBRow>

          <MDBInput
            label='Contraseña'
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <MDBInput
            label='Confirmar Contraseña'
            id='confirmPassword'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <MDBBtn className='w-100 mb-4' size='md' type='submit'>
            Registrarse
          </MDBBtn>

          {message && <div className="alert alert-danger">{message}</div>}
        </form>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
</MDBRow>
</MDBContainer>



export default FormRegistro;

