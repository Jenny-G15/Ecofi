import { Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import ContextoEcofi from '../Componentes/Context/EcofiContex';

export default function PrivateRoute({children}) {
    const { isAuthenticated } = useContext(ContextoEcofi);

    return isAuthenticated ? children : <Navigate to="/login" />;

}
