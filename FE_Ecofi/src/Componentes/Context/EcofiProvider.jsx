import React, { useState, useCallback } from 'react'
import { getProductos } from "../../services/productServices";
import ContextoEcofi from './EcofiContex'

const EcofiProvider = ({children}) => {
    const [Productos, setProductos] = useState([]);
    
    const loadProductos = useCallback(async () => {
      try {
        const response = await getProductos();
        setProductos(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      loadProductos()
  }, []);

  return <ContextoEcofi.Provider value={{Productos}}>{children}</ContextoEcofi.Provider>
}

export default EcofiProvider
