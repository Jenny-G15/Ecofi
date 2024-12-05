import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Admin.css';

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/Principal" className="logo">ECOFI</Link>
      </div>
    
        <h3 id='adminTit'>Pagina Administracion</h3>
      
    
    </nav>
  );
}

export default Nav;
