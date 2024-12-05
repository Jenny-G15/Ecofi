import React, { useContext, useEffect, useState } from "react";
import cargarImagen from "../Firebase/config"; 
import "../styles/admin.css";
import { getEmprendedores } from "../services/emprendedorServices";
import { PostProductos } from "../services/productServices";
import ContextoEcofi from './Context/EcofiContex'
import ProductList from "./ProductList";

function CardsAdmin() {
  const [emprendedor, setEmprendedor] = useState([]);
  const [guardarEmprendedor, setGuardarEmprendedor] = useState("");
  const [Image, setImage] = useState("");
  const [stock, setStock] = useState("");
  const [bicolones, setBicolones] = useState("");
  const [description, setDescription] = useState("");

  const { Productos } = useContext(ContextoEcofi)

  useEffect(() => {
    async function obtenerEmprendedores() {
      const obtenerEmprendedores = await getEmprendedores()
      setEmprendedor(obtenerEmprendedores)
    }
    obtenerEmprendedores()
  }, []) 

  const handleSelectChange = (event) => {
    const selectedId = event.target.value; 
    setGuardarEmprendedor(selectedId); 
  };

  const cargarImagenFirebase =  async (e) => {
    console.log(e)
    const obtenerImagen = e.target.files[0]
    setImage(obtenerImagen)

    if (obtenerImagen) {
      const subirImagen = await cargarImagen(obtenerImagen)
      setImage(subirImagen)
    }
  }

  const agregarProducto = async () => {
    console.log(guardarEmprendedor, bicolones, Image, stock, description);
    
    const respuesta = await PostProductos(guardarEmprendedor, bicolones, Image, stock, description)
    console.log(respuesta);
    
  }

  console.log('emprendedor', emprendedor)
  return (
    <div id="agregar-producto">
        <input
          id="imagen-producto"
          type="file"
          onChange={cargarImagenFirebase}
          required
        />
        <select id="seleccionar-emprendedor" required onChange={handleSelectChange}>
        <option value="">Seleccione un emprendedor</option>
        {emprendedor.map((emprendedor) => (
        <option key={emprendedor.id} value={emprendedor.id}>
          {emprendedor.Nombre_Emprendedor}
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
        <button id="btn-agregar-producto" onClick={agregarProducto}>Agregar producto</button>

      <ProductList productos={Productos}/>
    </div>
  );
}

export default CardsAdmin;
