import React, { useState, useEffect, createContext } from 'react';
import { getUsers } from '../../services/userServices';
import jwtDecode from 'jwt-decode';

const ContextoEcofi = createContext();

const EcofiProvider = ({ children }) => {
  const [Productos, setProductos] = useState('Prueba');
  const [userData, setUserData] = useState(null);

  const login = (user) => {
    setUserData(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setUserData(null);
    localStorage.removeItem('user');
  };

  const updateUserData = async () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const data = await getUsers(decodedToken.id);
      setUserData(data);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  return (
    <ContextoEcofi.Provider value={{ Productos, setProductos, userData, updateUserData, login, logout }}>
      {children}
    </ContextoEcofi.Provider>
  );
};

export { ContextoEcofi, EcofiProvider };





















// import React, { useState, useEffect } from 'react';
// import ContextoEcofi from './EcofiContex';


// const EcofiProvider = ({ children }) => {
//   const [Productos, setProductos] = useState('Prueba'); // Estado para productos
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

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setRol(JSON.parse(storedUser)); // Restaura el usuario desde localStorage
//     }
//   }, []);

//   return (
//     <ContextoEcofi.Provider value={{ Productos, setProductos, isAuthenticated, login, logout }}>
//       {children}
//     </ContextoEcofi.Provider>
//   );
// };

// export default EcofiProvider;





















