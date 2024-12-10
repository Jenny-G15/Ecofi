import React from 'react'

import {Row,Col} from 'react-bootstrap'
import NavAdmin from '../Componentes/NavAdmin'
import AdminSideBar from '../Componentes/SideBar'
import FormularioRecofi from '../Componentes/AgregarRecofis'






function RecofisPage() {
  return (
    <div>
      <NavAdmin/>
      <Row>
        <Col sm={2} > <AdminSideBar /></Col>
        <Col sm={10}><FormularioRecofi /></Col>
      </Row>
      

    </div>
  )
}

export default RecofisPage