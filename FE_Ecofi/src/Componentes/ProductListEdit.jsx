import React, { useState, useEffect } from "react";
import { deleteProducto, updateProducto, getProductos } from "../services/productServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getEmprendedores } from "../services/emprendedorServices";
import cargarImagen from "../Firebase/config";

function ProductListEdit({ actualizarLista }) { // 🔄 Recibe actualizarLista como prop
  const [eliminacion, setEliminacion] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 
  const [productos, setProductos] = useState([]);
  const [emprendedores, setEmprendedores] = useState([]);
  const [editarProducto, setEditarProducto] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [guardarEmprendedor, setGuardarEmprendedor] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); // Para previsualizar la imagen
  const [formData, setFormData] = useState({
    Bicolones_Producto: "",
    Imagen: "",
    Stock: "",
    Descripcion_Producto: "",
    Nombre_Producto: ""
  });

  async function cargarDatos() {
    try {
      const [productosData, emprendedoresData] = await Promise.all([
        getProductos(),
        getEmprendedores(),
      ]);
      setProductos(productosData);
      setEmprendedores(emprendedoresData);
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  }

  // 🔄 Se ejecuta cada vez que actualizarLista cambia
  useEffect(() => {
    cargarDatos();
  }, [actualizarLista]); 

  const obtenerNombreEmprendedor = (id) => {
    const emprendedor = emprendedores.find((e) => e.id === id);
    return emprendedor ? emprendedor.Nombre_Emprendedor : "Desconocido";
  };

  const abrirEdicion = (producto) => {
    setEditarProducto(producto);
    setFormData({
      Nombre_Producto: producto.Nombre_Producto,
      Bicolones_Producto: producto.Bicolones_Producto,
      Imagen: producto.Imagen,
      Stock: producto.Stock,
      Descripcion_Producto: producto.Descripcion_Producto,
    });
    setGuardarEmprendedor(producto.ID_Emprendedor);
    setPreviewImage(producto.Imagen); // Mantener la vista previa de la imagen
    setMostrarModal(true);
  };

  const ModificarImagenFirebase = async (e) => {
    const modificarImagen = e.target.files[0];

    if (modificarImagen) {
      setFormData({ ...formData, Imagen: modificarImagen });

      const nuevaUrlImagen = await cargarImagen(modificarImagen);
      toast.success("Imagen modificada con éxito");

      setFormData((prevForm) => ({ ...prevForm, Imagen: nuevaUrlImagen }));
      setPreviewImage(nuevaUrlImagen); // Actualizar vista previa
    }
  };

  const cerrarModal = () => {
    setEditarProducto(null);
    setMostrarModal(false);
    setPreviewImage(null);
  };

  const guardarCambios = async (e) => {
    e.preventDefault();
    try {
      const datosActualizados = {
        ...formData,
        ID_Emprendedor: guardarEmprendedor,
      };
  
      await updateProducto(editarProducto.id, datosActualizados);
      toast.success("Producto actualizado con éxito");
      cerrarModal();
      cargarDatos();
    } catch (error) {
      console.error("Error al guardar cambios:", error);
      toast.error("Hubo un error al guardar los cambios");
    }
  };

  const confirmarEliminacion = (id) => {
    setEliminacion(id);
  };

  const eliminarProducto = async () => {
    if (eliminacion) {
      setIsLoading(true);
      try {
        await deleteProducto(eliminacion);
        toast.success("Producto eliminado con éxito");
        setEliminacion(null);
        cargarDatos();
      } catch (error) {
        console.error("Error al eliminar producto:", error);
        toast.error("Hubo un error al eliminar el producto");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const cancelarEliminacion = () => {
    setEliminacion(null);
  };

  return (
    <div id="product-list-container">
      {productos.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.Imagen} alt={product.Nombre_Producto}
           style={{ width: "100px", height: "100px" }} />
          <h3>{product.Nombre_Producto}</h3>
          <p>Emprendedor: {obtenerNombreEmprendedor(product.ID_Emprendedor)}</p>
          <p>Bicolones: {product.Bicolones_Producto}</p>
          <p>Descripción: {product.Descripcion_Producto}</p>
          <p>Stock: {product.Stock}</p>
          <button onClick={() => confirmarEliminacion(product.id)}>Eliminar</button>

          {eliminacion && (
        <div className="modal" id="modalEliminarProducto">
          <div className="modal-content" id="modalContentEliminar">
          <h3 id="modalEliminarTitulo">Confirmar Eliminación</h3>
          <p id="modalEliminarMensaje">¿Estás seguro de que deseas eliminar este producto?</p>
          <button onClick={eliminarProducto} id="modalEliminarBtn">Sí</button>
          <button onClick={cancelarEliminacion} id="modalCancelarBtn">No</button>
        </div>
    </div>
)}
          <button onClick={() => abrirEdicion(product)}>Editar</button>
        </div>
      ))}

      {mostrarModal && (
        <div className="modal">
          <div id="edit-form-container">
            <h3>Editar Producto</h3>
            <form onSubmit={guardarCambios}>
              <input
                type="text"
                name="Nombre_Producto"
                value={formData.Nombre_Producto}
                placeholder="Nombre del producto"
                onChange={(e) => setFormData({ ...formData, Nombre_Producto: e.target.value })}
                required
              />
              <input
                type="text"
                name="Bicolones_Producto"
                value={formData.Bicolones_Producto}
                placeholder="Bicolones"
                onChange={(e) => setFormData({ ...formData, Bicolones_Producto: e.target.value })}
                required
              />
              {previewImage && <img src={previewImage} alt="Vista previa" width="100" />}
              <input type="file" name="Imagen" onChange={ModificarImagenFirebase} />
              <input
                type="number"
                name="Stock"
                value={formData.Stock}
                placeholder="Stock"
                onChange={(e) => setFormData({ ...formData, Stock: e.target.value })}
                required
              />
              <input
                type="text"
                name="Descripcion_Producto"
                value={formData.Descripcion_Producto}
                placeholder="Descripción"
                onChange={(e) => setFormData({ ...formData, Descripcion_Producto: e.target.value })}
                required
              />
              <select onChange={(e) => setGuardarEmprendedor(e.target.value)} value={guardarEmprendedor || ""} required>
                <option value="" disabled>
                  Seleccione un emprendedor
                </option>
                {emprendedores.map((emprendedor) => (
                  <option key={emprendedor.id} value={emprendedor.id}>
                    {emprendedor.Nombre_Emprendedor}
                  </option>
                ))}
              </select>
              <div>
                <button type="submit">Guardar cambios</button>
                <button type="button" onClick={cerrarModal}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductListEdit;
