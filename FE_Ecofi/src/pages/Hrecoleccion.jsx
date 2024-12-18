import React from 'react'
import {Row,Col} from 'react-bootstrap'
import NavAdmin from '../Componentes/NavAdmin'
import AdminSideBar from '../Componentes/SideBar'
import Historialrecolecciones from '../Componentes/HistorialRecoleccion'


function Recolecciones() {
  return (
    <div id='principalConteiner'>
      <NavAdmin/>
      <Row>
        <Col sm={2} > <AdminSideBar /></Col>
        <Col sm={10}><Historialrecolecciones /></Col>
      </Row>
      

    </div>
  )
}

export default Recolecciones