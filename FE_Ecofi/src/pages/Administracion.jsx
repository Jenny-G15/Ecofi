import React from 'react'
import "../styles/Admin.css"
import NavAdmin from '../Componentes/NavAdmin';
import CardsAdmin from '../Componentes/cardsAdmin';
import ProductEditForm from '../Componentes/ProductEditForm';
import ProductList from '../Componentes/ProductList';
import {Row,Col} from 'react-bootstrap'
import AdminSidebar from '../Componentes/SideBar'


function Administracion() {
  return (
    <div id='AdminBack'>
      <Row>
        <Col sm={2} > <AdminSidebar /></Col>
      </Row>
      
      <NavAdmin />
      <CardsAdmin/>
      <ProductEditForm/>
      <ProductList/>
  


    </div>
  )
}

export default Administracion
