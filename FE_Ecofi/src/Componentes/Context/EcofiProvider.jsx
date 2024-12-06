import React, { useState, useEffect } from 'react';
import { getProductos } from "../../services/productServices";
import ContextoEcofi from './EcofiContex';

const EcofiProvider = ({ children }) => {
    const [Productos, setProductos] = useState([]);
    const [productoAgregado, setProductoAgregado] = useState(false);

    useEffect(() => {
        if (productoAgregado){
            async function cargarProductosEcofi() {
                try {
                    const cargarProductos = await getProductos();
                    console.log(cargarProductos);
                    setProductos(cargarProductos);
                } catch (error) {
                    console.error("Error al cargar productos:", error);
                }
            }
            cargarProductosEcofi();
        }
    }, [productoAgregado]); // Solo se ejecuta una vez al montar el componente.

    console.log('Productos', Productos);

    return (
        <ContextoEcofi.Provider value={{ Productos, setProductoAgregado }}>
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
