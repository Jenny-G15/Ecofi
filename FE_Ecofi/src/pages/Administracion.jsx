import React from 'react'
import "../styles/Admin.css"
import FormProduct from '../Componentes/FormProduct';
import {Row,Col} from 'react-bootstrap'
import AdminSidebar from '../Componentes/SideBar'
import NavAdmin from '../Componentes/NavAdmin'


function Administracion() {
  return (
    <div id='AdminBack'>
        <NavAdmin />
      <Row>
        <Col sm={2} > <AdminSidebar /></Col>
        <Col sm={10} > <FormProduct/> </Col>

      </Row>
    
    </div>
  )
}

export default Administracion
