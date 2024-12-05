import React, { useContext, useEffect, useState } from "react";
import cargarImagen from "../Firebase/config"; 
import "../styles/admin.css";
import { getEmprendedores } from "../services/emprendedorServices";
import { PostProductos, getProductos } from "../services/productServices";
import ContextoEcofi from './Context/EcofiContex';
import ProductList from "./ProductList";

function CardsAdmin() {
  const [emprendedor, setEmprendedor] = useState([]);
  const [productos, setProductos] = useState([]); 
  const [Image, setImage] = useState("");
  const [stock, setStock] = useState("");
  const [bicolones, setBicolones] = useState("");
  const [description, setDescription] = useState("");
  const [selectedProducto, setSelectedProducto] = useState(""); 

  const { Productos } = useContext(ContextoEcofi); 

  useEffect(() => {
    async function obtenerEmprendedores() {
      const obtenerEmprendedores = await getEmprendedores();
      setEmprendedor(obtenerEmprendedores);
    }
    obtenerEmprendedores();

    async function obtenerProductos() {
      const obtenerProductos = await getProductos(); // Función para obtener los productos desde la base de datos
      setProductos(obtenerProductos); // Guardar los productos en el estado
    }
    obtenerProductos();
  }, []);

  const cargarImagenFirebase = async (e) => {
    const obtenerImagen = e.target.files[0];
    setImage(obtenerImagen);

    if (obtenerImagen) {
      const subirImagen = await cargarImagen(obtenerImagen);
      setImage(subirImagen);
    }
  };

  const agregarProducto = async (e) => {
    e.preventDefault();
    if (!bicolones || !description || !stock || !Image || !selectedProducto) {
      alert("Todos los campos son obligatorios");
      return;
    }

    // Aquí pasamos los datos al servicio para agregar el producto
    await PostProductos(selectedProducto, bicolones, Image, stock, description);
  };

  console.log('Productos en CardsAdmin:', Productos);

  return (
    <div id="agregar-producto">
      <form id="form-agregar-producto" onSubmit={agregarProducto}>
        <input
          id="imagen-producto"
          type="file"
          onChange={cargarImagenFirebase}
          required
        />
        
        {/* Dropdown de emprendedores */}
        <select id="seleccionar-emprendedor" required>
          <option value="">Seleccione un emprendedor</option>
          {emprendedor.map((emprendedor) => (
            <option key={emprendedor.id} value={emprendedor.id}>
              {emprendedor.Nombre_Emprendedor}
            </option>
          ))}
        </select>
        
        {/* Dropdown de productos */}
        <select
          id="seleccionar-producto"
          value={selectedProducto}
          onChange={(e) => setSelectedProducto(e.target.value)}
          required
        >
          <option value="">Seleccione un producto</option>
          {productos.map((producto) => (
            <option key={producto.id} value={producto.id}>
              {producto.Nombre_Producto}
            </option>
          ))}
        </select>

        <input
          id="precio-producto"
          type="text"
          value={bicolones}
          onChange={(e) => setBicolones(e.target.value)}
          placeholder="Precio"
          required
        />
        <input
          id="descripcion-producto"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
          required
        />
        <input
          id="stock-producto"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          required
        />
        <button id="btn-agregar-producto" type="submit">
          Agregar producto
        </button>
      </form>

      {/* Mostrar lista de productos si existen */}
      <ProductList productos={Productos || []} />
    </div>
  );
}

export default CardsAdmin;
