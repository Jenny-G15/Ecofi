import React from 'react'
import "../Styles/Perfil_Usuario.css"
import NavUsuario from '../Componentes/NavUsuario';
import Footer from '../Componentes/Footer'
import ComMonedero from '../Componentes/ComMonedero';
import TiendaProductos from '../Componentes/TiendaProductos';


function Perfil_Usuario() {
  return (
    <div id='perfilContainer'>
    <NavUsuario/>
    <ComMonedero/>
    <TiendaProductos/>
    <div id='footerConteiner'><Footer /> </div>
    </div>
 
  
  )
}

export default Perfil_Usuario