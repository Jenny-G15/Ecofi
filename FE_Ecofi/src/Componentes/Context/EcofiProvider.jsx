import React, { useState, createContext } from 'react';
import ContextoEcofi from './EcofiContex';

const EcofiProvider = ({ children }) => {
  const [Productos, setProductos] = useState([]);
  const [userData, setUserData] = useState({ token: null, bicolones: 0 });

  return (
    <ContextoEcofi.Provider value={{ Productos, setProductos, userData, setUserData }}>
      {children}
    </ContextoEcofi.Provider>
  );
};

export default EcofiProvider;
