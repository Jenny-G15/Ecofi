import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Perfil_Usuario.css';
import { getProductos } from '../services/productServices';
import Ventana from './Ventana';
import ContextoEcofi from './Context/EcofiContex';

function NavUsuario() {
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { logout } = useContext(ContextoEcofi);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getProductos();
      setProductos(data);
      setFilteredProductos(data);
    };
    fetchProductos();
  }, []);

  const inputEntrada = (e) => {
    setInputValue(e.target.value);
  };

  const busqueda = () => {
    const filtered = productos.filter((producto) =>
      (producto.Nombre_Producto && producto.Nombre_Producto.toLowerCase().includes(inputValue.toLowerCase())) ||
      (producto.Descripcion_Producto && producto.Descripcion_Producto.toLowerCase().includes(inputValue.toLowerCase()))
    );
    setFilteredProductos(filtered);
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    console.log("Token antes de logout:", token);

    logout();

    const tokenAfterLogout = localStorage.getItem("token");
    console.log("Token después de logout:", tokenAfterLogout);

    navigate("/login");
  };

  return (
    <>
      <nav id="navbar-ecofi">
        <div id="navbar-logo">
          <Link to="/" className="logo">ECOFI</Link>
        </div>
        <ul id="navbar-menu">
          <li><Link to="/Principal">Inicio</Link></li>
          <li><a href="#productosContainer">Productos</a></li>
          <li><a href="#footer-contact">Contactenos</a></li>
          <li><Link to="/Recofi">Recofi</Link></li>
          <li><button id="logout-button" onClick={handleLogout}>Cerrar</button></li>
        </ul>

        <div id="navbar-search">
          <input
            type="text"
            id="searchBarText"
            value={inputValue}
            onChange={inputEntrada}
            placeholder="Buscar productos..."
          />
          <button id="buttonSearch" onClick={busqueda}>Buscar</button>
        </div>
      </nav>

      <Ventana show={showModal} Close={cerrarModal} results={filteredProductos} />
    </>
  );
}

export default NavUsuario;
