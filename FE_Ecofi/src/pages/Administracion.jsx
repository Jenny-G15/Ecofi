import React from 'react'
import SideBar from '../Componentes/SideBar'
import {Row,Col} from 'react-bootstrap'
import "../Styles/Administracion.css"







function Administracion() {
  return (
    <div className='AdminBack'>
      <Row>
        <Col sm={2} > <SideBar /></Col>
      </Row>
      

    </div>
  )
}

export default Administracion
