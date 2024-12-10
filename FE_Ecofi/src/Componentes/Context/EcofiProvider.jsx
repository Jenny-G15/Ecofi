import React, { useState } from 'react';
import ContextoEcofi from './EcofiContex';

const EcofiProvider = ({ children }) => {
    const [Productos, setProductos] = useState('Prueba');

   

    return (
        <ContextoEcofi.Provider value={{ Productos, setProductos }}>
            {children}
        </ContextoEcofi.Provider>
    );
};

export default EcofiProvider;

// import React, { useState, useCallback, useEffect } from 'react'
// import { getProductos } from "../../services/productServices";
// import ContextoEcofi from './EcofiContex'

// const EcofiProvider = ({children}) => {
//     const [Productos, setProductos] = useState([]);

//     useEffect(() => {
//     async function cargarProductosEcofi() {
//         const cargarProductos = await getProductos()
//         console.log(cargarProductos)
//         setProductos(cargarProductos)
//       }
//       cargarProductosEcofi()
//     }, [Productos])
    
//   //   const loadProductos = useCallback(async () => {
//   //     try {
//   //       const response = await getProductos();
//   //       setProductos(response);
//   //     } catch (error) {
//   //       console.error("Error fetching products:", error);
//   //     }
//   //     loadProductos()
//   // }, []);

//   console.log('Productos', Productos)
  
//   return <ContextoEcofi.Provider value={{Productos}}>{children}</ContextoEcofi.Provider>
// }

// export default EcofiProvider
