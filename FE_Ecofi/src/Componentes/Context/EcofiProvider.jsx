import React, { useState, useEffect } from 'react';
import ContextoEcofi from './EcofiContex';
import Cookies from 'js-cookie'; // Importa js-cookie



const EcofiProvider = ({ children }) => {
  const [Productos, setProductos] = useState('Prueba'); // Estado para productos
  const [Rol, setRol] = useState(null);
  const isAuthenticated = Rol;

  const login = (user, token) => {
    setRol(user); // Guarda los datos del usuario al iniciar sesión
    localStorage.setItem('user', JSON.stringify(user)); // Guardar usuario en localStorage
    Cookies.set('auth_token', token, { expires: 1/24, secure: true, sameSite: 'Strict' }); // Guarda el token en una cookie con expiración de 1 hora
  };

  const logout = () => {
    console.log('Eliminando token de cookies y localStorage');
    Cookies.remove('auth_token'); // Elimina el token de la cookie
    localStorage.removeItem('user');  // Elimina los datos del usuario
    setRol(null); // Resetea el estado del rol
  };

  useEffect(() => {
    const token = Cookies.get('auth_token'); // Verifica si hay un token en las cookies
    if (token) {
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
