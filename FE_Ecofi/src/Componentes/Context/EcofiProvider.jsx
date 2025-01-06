import React, { useState, useEffect } from 'react';
import ContextoEcofi from './EcofiContex';

const EcofiProvider = ({ children }) => {
  const [Productos, setProductos] = useState('Prueba'); // Estado para productos
  const [Rol, setRol] = useState(null);
  const isAuthenticated = Rol; 

  const login = (user) => {
    setRol(user); // Guarda los datos del usuario al iniciar sesión
    localStorage.setItem('user', JSON.stringify(user)); 
    sessionStorage.setItem('token', 'some-token-value'); // Asegúrate de guardar el token en sessionStorage también
  };

  const logout = () => {
    console.log('Eliminando token de localStorage y sessionStorage');
    localStorage.removeItem('token'); // Elimina el token de localStorage
    sessionStorage.removeItem('token'); // Elimina el token de sessionStorage
    localStorage.removeItem('user');  // También elimina los datos del usuario si es necesario
    setRol(null); // Resetea el estado del rol
    console.log('Token después de logout (localStorage):', localStorage.getItem('token'));
    console.log('Token después de logout (sessionStorage):', sessionStorage.getItem('token'));
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setRol('usuario'); // O cualquier valor según tu rol
    } else {
      setRol(null); // Resetea el rol si no hay token
    }
  }, []); // Solo ejecuta una vez al montar el componente

  return (
    <ContextoEcofi.Provider value={{ Productos, setProductos, isAuthenticated, login, logout }}>
      {children}
    </ContextoEcofi.Provider>
  );
};

export default EcofiProvider;












// import React, { useState, createContext, useEffect } from 'react';
// import ContextoEcofi from './EcofiContex';



// const EcofiProvider = ({ children }) => {
//   const [Productos, setProductos] = useState('Prueba'); // Estado para productos
//   const [userData, setUserData] = useState({token: null});
//   const [Rol, setRol] = useState(null);
//   const isAuthenticated = Rol; 

//   const login = (user) => {
//     setRol(user); // Guarda los datos del usuario al iniciar sesión
//     localStorage.setItem('user', JSON.stringify(user)); 
//   };

//   const logout = () => {
//     setRol(null); // Elimina los datos del usuario al cerrar sesión
//     localStorage.removeItem('user'); 
//   };
  
//  useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser)); // Restaura el usuario desde localStorage
//     }
//   }, []);

//   return (
//     <ContextoEcofi.Provider value={{ Productos, setProductos, userData, setUserData, isAuthenticated, login, logout}}>
//       {children}
//     </ContextoEcofi.Provider>
//   );
// };

// export default EcofiProvider;









