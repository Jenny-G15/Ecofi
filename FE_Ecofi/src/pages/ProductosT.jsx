import React from 'react'
import TiendaProductos from '../Componentes/TiendaProductos'
import NavUsuario from '../Componentes/NavUsuario'
import Footer from '../Componentes/Footer'

export default function ProductosT() {


  
  return (
    <div id='principalConteiner'>
      <NavUsuario/>
      <TiendaProductos />
      <div id='footerConteiner'><Footer /> </div>
    </div>
  )
}
