import React, { useContext } from 'react'
import ContextoEcofi from './Context/EcofiContex'

export default function Bienvenida() {
    const {first} = useContext(ContextoEcofi)
  return (
    <div>
      <h1>Hola {first}</h1>
    </div>
  )
}
