import React from 'react'
import AdminSideBar from '../Componentes/SideBar'
import AgregarAdministradores from '../Componentes/AgregarAdmin'
import {Row,Col} from 'react-bootstrap'
import NavAdmin from '../Componentes/NavAdmin'


function Admin() {
  return (
    <div>
      <NavAdmin/>
      <Row>
        <Col sm={2} > <AdminSideBar /></Col>
        <Col sm={10}><AgregarAdministradores /></Col>
      </Row>
      

    </div>
  )
}

export default Admin
