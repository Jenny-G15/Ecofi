
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";

function AdminSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
        </nav>
      </div>
    </>

  );
}

export default AdminSideBar;



