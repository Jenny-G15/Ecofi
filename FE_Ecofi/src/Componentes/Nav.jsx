import React from 'react';
import { Link } from 'react-router-dom';  // Importamos Link para navegación
import "../styles/Nav.css"

function Nav() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a Ecofi</h1>
        <p>Esta es una página de inicio con información general.</p>
        <Link to="/register" className="btn btn-primary">Ir al Registro</Link>
      </header>
    </div>
  );
}

export default Nav;
