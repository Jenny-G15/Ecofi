import React from 'react'
import "../Styles/Recofi.css"
import MapaRecofi from '../Componentes/Mapa'
import Nav from '../Componentes/Nav'
import Footer from '../Componentes/Footer'

function Recofi() {
  return (
    <div>
     <Nav />
    <MapaRecofi/>
    <div id='footerConteiner'><Footer /> </div>
    </div>
  )
}

export default Recofi