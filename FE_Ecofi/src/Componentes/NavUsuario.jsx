import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Perfil_Usuario.css';
import { getProductos } from '../services/productServices';
import Ventana from './Ventana';
import ContextoEcofi from './Context/EcofiContex'; // Importar el contexto
import Cookies from 'js-cookie'; // Importar js-cookie

function NavUsuario() {
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { logout } = useContext(ContextoEcofi); // Obtener la función logout desde el contexto
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
    console.log("Intentando cerrar sesión...");
    logout(); // Llama a logout desde el contexto
    
    // Eliminar el token de las cookies
    Cookies.remove('auth_token'); // Elimina el token de las cookies
    console.log("Token después de logout:", Cookies.get('auth_token')); // Verifica si el token se ha eliminado

    navigate("/login");
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="logo">ECOFI</Link>
        </div>
        <ul className="navbar-menu">
          <li><Link to="/Principal">Inicio</Link></li>
          <li><Link to="/Perfil">Monedero</Link></li>
          <li><Link to="/ProductosCanje">Productos</Link></li>
          <li><a href="#contacto">Contactenos</a></li>
          {/* Botón de Cerrar Sesión */}
          <li><button onClick={handleLogout}>Cerrar Sesion</button></li>
        </ul>

        {/* Barra de búsqueda dentro del nav */}
        <div className="navbar-search">
          <input
            type="text"
            id='searchBarText'
            value={inputValue}
            onChange={inputEntrada}
            className="inputSearch"
            placeholder="Buscar productos..."
          />
          <button
            onClick={busqueda}
            className="buttonSearch"
          >
            Buscar
          </button>
        </div>
      </nav>

      {/* Modal con los resultados de búsqueda */}
      <Ventana
        show={showModal}
        Close={cerrarModal}
        results={filteredProductos}
      />
    </>
  );
}

export default NavUsuario;
