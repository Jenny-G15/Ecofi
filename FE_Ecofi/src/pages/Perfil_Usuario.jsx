import React from 'react'
import "../Styles/Perfil_Usuario.css"
import NavUsuario from '../Componentes/NavUsuario'
import Monedero from '../Componentes/ComMonedero'

function Perfil_Usuario() {
  return (
    <div id='principalConteiner'>

    <NavUsuario/>
    <Monedero/>
 
    </div>
  )
}

export default Perfil_Usuario