import React, { useState, useEffect } from "react";
import { deleteProducto, updateProducto, getProductos } from "../services/productServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Admin.css";

function ProductList() {
  const [isLoading, setIsLoading] = useState(false);
  const [productos, setProductos] = useState([]);
  const [editarProducto, setEditarProducto] = useState(null); // Producto a editar
  const [mostrarModal, setMostrarModal] = useState(false); // Controla el modal de edición
  const [formData, setFormData] = useState({
    Bicolones_Producto: "",
    Imagen: "",
    Stock: "",
    Descripcion_Producto: "",
  });

  // Cargar productos al montar el componente
  useEffect(() => {
    async function cargarProductos() {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    }
    cargarProductos();
  }, []);

    //Obtiene el id del emprendedor para guardarlo en la base de datos
    const cargarIdEmprendedor = (event) => {
      const selectedId = event.target.value; 
      setGuardarEmprendedor(selectedId); 
    };
    

  // Confirmar y eliminar producto
  const confirmarEliminacion = (id) => {
    toast.info(
      <div>
        <p>¿Estás seguro de que deseas eliminar este producto?</p>
        <button onClick={() => eliminarProducto(id)} style={{ marginRight: "10px" }}>
          Sí
        </button>
        <button onClick={() => toast.dismiss()}>No</button>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  };

  const eliminarProducto = async (id) => {
    setIsLoading(true);
    try {
      await deleteProducto(id);
      toast.success("Producto eliminado con éxito");
      setProductos((prevProductos) => prevProductos.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      toast.error("Hubo un error al eliminar el producto");
    } finally {
      setIsLoading(false);
    }
  };

  // Abrir el formulario de edición con un producto específico
  const abrirEdicion = (producto) => {
    console.log("Producto seleccionado para edición:", producto);
    
    setEditarProducto(producto);
    setFormData({
      Bicolones_Producto: producto.Bicolones_Producto,
      Imagen: producto.Imagen,
      Stock: producto.Stock,
      Descripcion_Producto: producto.Descripcion_Producto,
    });
    console.log("Estado antes de mostrar modal:", { mostrarModal });

    setMostrarModal(true);

    console.log("Estado antes de mostrar modal:", { mostrarModal });
    
    console.log("Modal debería abrirse ahora");
  };

  // Guardar los cambios realizados al producto
  const actualizarProducto = async (id, datosActualizados) => {
    try {
      await updateProducto(id, datosActualizados);
      toast.success("Producto actualizado con éxito");
      setProductos((prevProductos) =>
        prevProductos.map((p) => (p.id === id ? { ...p, ...datosActualizados } : p))
      );
      cerrarModal();
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      toast.error("Hubo un error al actualizar el producto");
    }
  };

  // Cerrar el modal
  const cerrarModal = () => {
    setEditarProducto(null);
    setMostrarModal(false);
  };


  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const guardarCambios = (e) => {
    e.preventDefault();
    if (editarProducto) {
      actualizarProducto(editarProducto.id, formData);
    }
  };

  return (
    <div id="product-list-container">
      {productos.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.Imagen}
            alt={product.Nombre_Producto}
            style={{ width: "100px", height: "100px" }}
          />
          <h3>{product.Nombre_Producto}</h3>
          {console.log(product)}
          <p>{product.ID_Emprendedor}</p>
          <p>{product.Bicolones_Producto}</p>
          <p>{product.Descripcion_Producto}</p>
          <p>{product.Stock}</p>
          <button disabled={isLoading} onClick={() => confirmarEliminacion(product.id)}>
            {isLoading ? "Eliminando..." : "Eliminar"}
          </button>
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
                name="Bicolones_Producto"
                value={formData.Bicolones_Producto}
                onChange={manejarCambio}
                placeholder="Bicolones"
                required
              />
              <input
                type="text"
                name="Descripcion_Producto"
                value={formData.Descripcion_Producto}
                onChange={manejarCambio}
                placeholder="Descripción"
                required
              />
              <input
                type="number"
                name="Stock"
                value={formData.Stock}
                onChange={manejarCambio}
                placeholder="Stock"
                required
              />
              <input
                type="text"
                name="Imagen"
                value={formData.Imagen}
                onChange={manejarCambio}
                placeholder="URL Imagen"
              />
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

// function ProductEditForm({ product, onClose, onSave }) {


//   return (

//   );
// }

export default ProductList;
