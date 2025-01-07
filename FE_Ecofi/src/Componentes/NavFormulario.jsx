import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/NavBarFormulario.css"
import ContextoEcofi from './Context/EcofiContex';

function NavFormulario() {
  const { logout } = useContext(ContextoEcofi);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav id="navbarFormulario">
      <div id="logoFormulario">
        <Link to="/" className="logo">Ecofi</Link>
      </div>
      <ul id="menuFormulario">
        <li>
          <button id="buttonFormularioLogOut" onClick={handleLogout}>Cerrar Sesión</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavFormulario;
