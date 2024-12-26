import React, { useState, createContext } from 'react';
import ContextoEcofi from './EcofiContex';



const EcofiProvider = ({ children }) => {
  const [Productos, setProductos] = useState('Prueba'); // Estado para productos
  const [userData, setUserData] = useState({token: null});
  const [Rol, setRol] = useState(null);
  const isAuthenticated = Rol; 

  const login = (user) => {
    setRol(user); // Guarda los datos del usuario al iniciar sesión
    // localStorage.setItem('user', JSON.stringify(user)); 
  };

  const logout = () => {
    setRol(null); // Elimina los datos del usuario al cerrar sesión
    // localStorage.removeItem('user'); 
  };
  
//  useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser)); // Restaura el usuario desde localStorage
//     }
//   }, []);

  return (
    <ContextoEcofi.Provider value={{ Productos, setProductos, userData, setUserData, isAuthenticated, login, logout}}>
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
