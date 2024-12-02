import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/inicio.css';

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo">ECOFI</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/QuienesSomos">Quienes somos?</Link></li>
        <li><Link to="/Login">INICIAR SESION</Link></li>
        <li><Link to="/Register">Registrarme</Link></li>
        <li><Link to="/Contacto">Contactenos</Link></li>
        <li><Link to="/Recofi">Recofi</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
