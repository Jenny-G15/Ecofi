import React, { useState } from 'react'
import ContextoEcofi from './EcofiContex'

const EcofiProvider = ({children}) => {
    const [first, setFirst] = useState('Hola, prueba')
  return <ContextoEcofi.Provider value={{first, setFirst}}>{children}</ContextoEcofi.Provider>
}

export default EcofiProvider
