import React from 'react';
import { Navigate } from 'react-router-dom';


const Protect = ({ children }) => {
    
    const estaAutenticado = localStorage.getItem("Autentificado") === "true"; 

    if (!estaAutenticado ) {
       
        return <Navigate to="/" />;
    }

    return children;
};

export default Protect;