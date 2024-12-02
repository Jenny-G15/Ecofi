import React from 'react'
import SideBar from '../Componentes/SideBar'
import FormAdmin from '../Componentes/FormAdmin'
import {Row,Col} from 'react-bootstrap'
import NavBarInc from '../Componentes/NavBar'
import "../Styles/Administracion.css"







function Administracion() {
  return (
    <div className='AdminBack'>
       <NavBarInc />
      <Row>
        <Col sm={2} > <SideBar /></Col>
        <Col sm={10}><FormAdmin /></Col>
      </Row>
      
      

    </div>
  )
}

export default Administracion
