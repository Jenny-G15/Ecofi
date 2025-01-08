import React, { useState, useEffect } from 'react';
import ContextoEcofi from './EcofiContex';

// Este componente es un proveedor que permite compartir información globalmente en la aplicación.
const EcofiProvider = ({ children }) => {
  
  const [Productos, setProductos] = useState('Prueba'); 
  // Estado para guardar el rol del usuario (por ejemplo, administrador o cliente).
  const [Rol, setRol] = useState(null); 
  // Variable que verifica si el usuario está autenticado (es true si hay un rol definido).
  const isAuthenticated = Rol; 

  // Función para iniciar sesión del usuario.
  const login = (user) => {
    setRol(user); // Guarda el rol o los datos del usuario.
    localStorage.setItem('user', JSON.stringify(user)); // Almacena los datos del usuario en localStorage.
  };

  // Función para cerrar sesión del usuario. Limpia el rol, elimina los datos del LocalStorage y elimina el Token del SessionStorage
  const logout = () => {
    setRol(null); 
    localStorage.removeItem('user'); // Elimina los datos del usuario del localStorage.
    sessionStorage.removeItem('token'); // Elimina el token de sesión del sessionStorage.
  };

  // useEffect se ejecuta al cargar el componente, Obtiene los datos del usuario almacenados.
  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // 
    if (storedUser) {
      setRol(JSON.parse(storedUser)); 
    }
  }, []); 

  return (
    // Provee los datos y funciones a todos los componentes hijos que lo necesiten.
    <ContextoEcofi.Provider value={{ Productos, setProductos, isAuthenticated, login, logout }}>
   {children}
    </ContextoEcofi.Provider>
  );
};

export default EcofiProvider;

