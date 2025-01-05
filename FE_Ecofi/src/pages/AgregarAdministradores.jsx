import React from 'react'
import AdminSideBar from '../Componentes/SideBar'
import AgregarAdministradores from '../Componentes/AgregarAdmin'
import {Row,Col} from 'react-bootstrap'
import NavAdmin from '../Componentes/NavAdmin'
import "../Styles/Administrador.css"


function Admin() {
  return (
    <div id='agregarAdmin2'>
      <NavAdmin/>
      <Row>
        <Col sm={2} > <AdminSideBar /></Col>
        <Col sm={10}><AgregarAdministradores /></Col>
      </Row>
      

    </div>
  )
}

export default Admin
