import React, { useState, createContext } from 'react';
import ContextoEcofi from './EcofiContex';

// const ContextoEcofi = createContext();

const EcofiProvider = ({ children }) => {
  const [Productos, setProductos] = useState('Prueba'); // Estado para productos
  const [userData, setUserData] = useState({token: null});

  return (
    <ContextoEcofi.Provider value={{ Productos, setProductos, userData, setUserData }}>
      {children}
    </ContextoEcofi.Provider>
  );
};

export { ContextoEcofi, EcofiProvider };
