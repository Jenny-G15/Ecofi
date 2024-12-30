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
        <li><Link to="/Perfil">Monedero</Link></li> 
        <li><Link to="/ProductosCanje">Productos</Link></li>
        <li><a href="#contacto">Contactenos</a></li>
        <li><Link to="/Principal">Cerrar Sesion</Link></li>
      </ul>
    </nav>
  );
}

export default NavUsuario;
