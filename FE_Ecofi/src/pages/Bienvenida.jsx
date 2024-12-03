import React from 'react'
import "../Styles/inicio.css"
import EcofiProvider from '../Componentes/Context/EcofiProvider'
import Bienvenida from '../Componentes/Bienvenida'

function Inicio() {
  return (
    <EcofiProvider>
      <Bienvenida/>
    </EcofiProvider>
  )
}

export default Inicio
