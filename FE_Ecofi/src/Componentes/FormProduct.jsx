import React, { useEffect, useState } from "react";
import cargarImagen from "../Firebase/config";
import "../styles/admin.css";
import { getEmprendedores } from "../services/emprendedorServices";
import { PostProductos } from "../services/productServices";
import ProductListEdit from "./ProductListEdit";

function CardsProduct() {
  const [emprendedor, setEmprendedor] = useState([]);
  const [guardarEmprendedor, setGuardarEmprendedor] = useState("");
  const [Nombre_Producto, setProducto] = useState("");
  const [Imagen, setImagen] = useState(""); // Corregido: antes era "Image"
  const [Stock, setStock] = useState("");
  const [Bicolones_Producto, setBicolones] = useState(""); // Corregido: nombre correcto
  const [Descripcion_Producto, setDescripcion] = useState(""); // Corregido: nombre correcto
  const [actualizarLista, setActualizarLista] = useState(false); // Para forzar el refresco

  useEffect(() => {
    async function obtenerEmprendedores() {
      const obtenerEmprendedores = await getEmprendedores();
      setEmprendedor(obtenerEmprendedores);
    }
    obtenerEmprendedores();
  }, []);

  // Captura el ID del emprendedor seleccionado
  const cargarIdEmprendedor = (event) => {
    setGuardarEmprendedor(event.target.value);
  };

  // Cargar imagen en Firebase y obtener URL
  const cargarImagenFirebase = async (e) => {
    const obtenerImagen = e.target.files[0];
    setImagen(obtenerImagen);

    if (obtenerImagen) {
      const subirImagen = await cargarImagen(obtenerImagen);
      setImagen(subirImagen);
    }
  };

  // Agregar producto a la base de datos
  const agregarProducto = async () => {
    // Validación básica antes de enviar
    if (!guardarEmprendedor || !Nombre_Producto || !Bicolones_Producto || !Imagen || !Stock || !Descripcion_Producto) {
      alert("Todos los campos son obligatorios");
      return;
    }

    console.log("Datos a enviar:", {
      ID_Emprendedor: guardarEmprendedor,
      Nombre_Producto,
      Bicolones_Producto: Number(Bicolones_Producto),
      Imagen,
      Stock: Number(Stock),
      Descripcion_Producto
    });

    try {
      const respuesta = await PostProductos(
        guardarEmprendedor,
        Nombre_Producto,
        Number(Bicolones_Producto),  // Convertir a número
        Imagen,
        Number(Stock),  // Convertir a número
        Descripcion_Producto
      );

      console.log("Producto agregado con éxito:", respuesta);

      // Actualiza la lista de productos en el componente ProductListEdit
      setActualizarLista(prev => !prev); // Esto invierte el valor para que el useEffect en ProductListEdit lo detecte

      // Limpiar campos después de agregar el producto
      setProducto("");
      setBicolones("");
      setDescripcion("");
      setStock("");
      setImagen("");
      setGuardarEmprendedor("");
    } catch (error) {
      console.error("Error al agregar el producto:", error);
    }
  };

  return (
    <div id="agregar-producto">
      <div>
        <input id="imagen-producto" type="file" onChange={cargarImagenFirebase} required />
        <select id="seleccionar-emprendedor" required onChange={cargarIdEmprendedor} value={guardarEmprendedor}>
          <option value="">Seleccione un emprendedor</option>
          {emprendedor.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.Nombre_Emprendedor}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={Nombre_Producto}
          onChange={(e) => setProducto(e.target.value)}
          placeholder="Nombre Producto"
          required
        />
        <input
          type="text"
          value={Bicolones_Producto}
          onChange={(e) => setBicolones(e.target.value)}
          placeholder="Precio (Bicolones)"
          required
        />
        <input
          type="text"
          value={Descripcion_Producto}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
          required
        />
        <input
          type="number"
          value={Stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          required
        />
        <button onClick={agregarProducto}>Agregar producto</button>
      </div>

      {/* Pasamos actualizarLista como prop */}
      <ProductListEdit actualizarLista={actualizarLista} />
    </div>
  );
}

export default CardsProduct;
