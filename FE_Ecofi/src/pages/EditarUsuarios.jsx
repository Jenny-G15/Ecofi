import React from 'react'
import AdminSideBar from '../Componentes/SideBar'
import EditUsuarios from '../Componentes/EditUsuarios'
import {Row,Col} from 'react-bootstrap'
import NavAdmin from '../Componentes/NavAdmin'






function EditarUsuarios() {
  return (
    <div>
      <NavAdmin/>
      <Row>
        <Col sm={2} > <AdminSideBar /></Col>
        <Col sm={10}><EditUsuarios /></Col>
      </Row>
      

    </div>
  )
}

export default EditarUsuarios