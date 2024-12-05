import React from 'react'
import "../styles/Admin.css"
import NavAdmin from '../Componentes/NavAdmin';
// import Footer from '../Componentes/Footer';
import CardsAdmin from '../Componentes/cardsAdmin';
import ProductEditForm from '../Componentes/ProductEditForm';
import ProductList from '../Componentes/ProductList';


function Administracion() {
  return (
    <div id='AdminBack'>
      
      <NavAdmin />
      <CardsAdmin/>
      <ProductEditForm/>
      <ProductList/>
  
      {/* <div id='footerConteiner'><Footer /> </div> */}

    </div>
  )
}

export default Administracion
