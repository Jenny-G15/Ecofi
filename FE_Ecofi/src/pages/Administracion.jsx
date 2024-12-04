import React from 'react'
import {Row,Col} from 'react-bootstrap'
import '../styles/Admin.css'
import AdminSidebar from '../Componentes/SideBar'



function Administracion() {
  return (
    <div className='AdminBack'>
      <Row>
        <Col sm={2} > <AdminSidebar /></Col>
      </Row>
      <Nav /> <CardsAdmin/>
  

    </div>
  )
}

export default Administracion
