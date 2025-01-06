import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SideBar.css";
import ContextoEcofi from './Context/EcofiContex'; // Importar el contexto
import Cookies from 'js-cookie'; // Importar js-cookie

function AdminSideBar() {
  const { logout } = useContext(ContextoEcofi); // Obtener la función logout desde el contexto
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    console.log("Intentando cerrar sesión...");
    logout(); // Llama a logout desde el contexto

    // Eliminar el token de las cookies
    Cookies.remove('auth_token'); // Elimina el token de las cookies
    console.log("Token después de logout:", Cookies.get('auth_token')); // Verifica si el token se ha eliminado

    navigate("/login");
  };

  return (
    <>
      {!isOpen && (
        <button
          className="menuButton1"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      )}
      <div className={`sidebarContainer ${isOpen ? "open" : ""}`}>
        <button className="closeButton1" onClick={toggleSidebar}>
          ✖
        </button>
        <nav className="sidebarNav">
          <h4 id="tituloSideBar">Menú</h4>
          <hr id="hrSideBar" />
          <Link id="SideText" className="sidebarLink" to="/Administracion">
            Agregar Productos
          </Link>
          <Link className="sidebarLink" to="/AgregarAdmin">
            Agregar Administradores
          </Link>
          <Link className="sidebarLink" to="/AgregarRecofi">
            Agregar Recofis
          </Link>
          <Link className="sidebarLink" to="/AgregarEmpren">
            Agregar Emprendedor
          </Link>
          <Link className="sidebarLink" to="/Editarusuarios">
            Edición de Usuarios
          </Link>
          <Link className="sidebarLink" to="/Hrecoleccion">
            Estadísticas de Recolección
          </Link>
          {/* Botón de Cerrar Sesión */}
          <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
        </nav>
      </div>
    </>
  );
}

export default AdminSideBar;
