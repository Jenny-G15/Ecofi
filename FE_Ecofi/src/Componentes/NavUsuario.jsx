import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Perfil_Usuario.css';

function NavUsuario() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo">ECOFI</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/Principal">Inicio</Link></li>
        <li><Link to="/Perfil/Monedero">monedero</Link></li>
        <li><Link to="/">Productos</Link></li>
        <li><Link to="/Contacto">Contactenos</Link></li>
        <li><Link to="/Principal">Cerrar Sesion</Link></li>
      </ul>
    </nav>
  );
}

export default NavUsuario;
