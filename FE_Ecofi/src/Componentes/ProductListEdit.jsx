import React, { useState, useEffect } from "react";
import { deleteProducto, updateProducto, getProductos } from "../services/productServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getEmprendedores } from "../services/emprendedorServices";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import cargarImagen from "../Firebase/config";
// uploadBytesResumable para cargar el archivo al almacenamiento.
//getDownloadURL para obtener la URL del archivo cargado.

function ProductListEdit() {
  const [isLoading, setIsLoading] = useState(false);
  const [eliminacion, setEliminacion] = useState(null);
  const [productos, setProductos] = useState([]);
  const [emprendedores, setEmprendedores] = useState([]);
  // const [editarProducto, setEditarProducto] = useState(null);
  // const [mostrarModal, setMostrarModal] = useState(false);
  // const [guardarEmprendedor, setGuardarEmprendedor] = useState(null);
  // // const [formData, setFormData] = useState({
  //   Bicolones_Producto: "",
  //   Imagen: "",
  //   Stock: "",
  //   Descripcion_Producto: "",
  // });
  // const [previewImage, setPreviewImage] = useState(null); // Para previsualizar la imagen

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
  useEffect(() => {
    cargarDatos();
  }, []);

  const obtenerNombreEmprendedor = (id) => {
    const emprendedor = emprendedores.find((e) => e.id === id);
    return emprendedor ? emprendedor.Nombre_Emprendedor : "Desconocido";
  };

  // const cargarIdEmprendedor = (event) => {
  //   const selectedId = event.target.value;
  //   setGuardarEmprendedor(selectedId);
  // };

  // const abrirEdicion = (producto) => {
  //   setEditarProducto(producto);
  //   setFormData({
  //     Bicolones_Producto: producto.Bicolones_Producto,
  //     Imagen: producto.Imagen,
  //     Stock: producto.Stock,
  //     Descripcion_Producto: producto.Descripcion_Producto,
  //   });
  //   setGuardarEmprendedor(producto.ID_Emprendedor);
  //   setPreviewImage(producto.Imagen); // Mostrar imagen existente como vista previa
  //   setMostrarModal(true);
  // };

  // const manejarCambio = (e) => {
  //   const { name, value, files } = e.target;
  //   if (name === "Imagen" && files.length > 0) {
  //     const file = files[0];
  //     setPreviewImage(URL.createObjectURL(file)); // Previsualizar imagen
  //     setFormData({ ...formData, Imagen: file }); // Guardar archivo en el estado
  //   } else {
  //     setFormData({ ...formData, [name]: value });
  //   }
  // };

  // const subirImagenAFirebase = async (file) => {
  //   const storage = getStorage();
  //   const storageRef = ref(storage, `imagenes/${file.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   return new Promise((resolve, reject) => {
  //     uploadTask.on(
  //       "state_changed",
  //       null,
  //       (error) => reject(error),
  //       async () => {
  //         const url = await getDownloadURL(uploadTask.snapshot.ref);
  //         resolve(url);
  //       }
  //     );
  //   });
  // };

  // const cerrarModal = () => {
  //   setEditarProducto(null);
  //   setMostrarModal(false);
  //   setPreviewImage(null);
  // };

  // const guardarCambios = async (e) => {
  //   e.preventDefault();
  //   try {

  //     // Subir imagen si es un archivo nuevo
  //     if (formData.Imagen instanceof File) { //para validar el archivo antes de cargarlo.
  //       toast.info("Subiendo imagen...");
  //       await cargarImagen(formData.Imagen);
  //       toast.success("Imagen modificada con éxito");
  //     }

  //     const datosActualizados = {
  //       ...formData,
  //       Imagen: formData.Imagen,
  //       ID_Emprendedor: guardarEmprendedor,
  //     };
  //     console.log("Datos a actualizar:", datosActualizados);
  //     await updateProducto(editarProducto.id, datosActualizados);
  //     toast.success("Producto actualizado con éxito");
  //     setProductos((prevProductos) =>
  //       prevProductos.map((p) => (p.id === editarProducto.id ? { ...p, ...datosActualizados } : p))
  //     );
  //     cerrarModal();
  //   } catch (error) {
  //     console.error("Error al guardar cambios:", error);
  //     toast.error("Hubo un error al guardar los cambios");
  //   }
  // };

  // Confirmar eliminacion enviando el id por un hook 
  const confirmarEliminacion = (id) => {
    setEliminacion(id)
  };

  //Eliminar el producto seleccionado 
  const eliminarProducto = async () => {
    if (eliminacion) {
      setIsLoading(true);
      try {
        console.log("Eliminando producto con ID:", eliminacion);
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
    };
  }

  //Setear el hook a null para quitar el modal de confirmacion  de eliminacion
  const cancelarEliminacion = () => {
    setEliminacion(null)
  }

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
          <p>Emprendedor: {obtenerNombreEmprendedor(product.ID_Emprendedor)}</p>
          <p>Bicolones: {product.Bicolones_Producto}</p>
          <p>Descripción: {product.Descripcion_Producto}</p>
          <p>Stock: {product.Stock}</p>
          {console.log(product.id)}
          <button onClick={() => confirmarEliminacion(product.id)}>Eliminar</button>
          {/* Mostrar modal para confirmar la eliminacion */}
          {eliminacion && (
            <div className="modal">
                <div className="modal-content">
                    <h3>Confirmar Eliminación</h3>
                    <p>¿Estás seguro de que deseas eliminar este producto?</p>
                    <button onClick={eliminarProducto}>Sí</button>
                    <button onClick={cancelarEliminacion}>No</button>
                </div>
            </div>
        )};
          <button onClick={() => abrirEdicion(product)}>Editar</button>
        </div>
      ))}
      {/* {mostrarModal && (
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
              <input type="file" name="Imagen" onChange={manejarCambio} />
              {previewImage && <img src={previewImage} alt="Vista previa" width="100" />}
              <select onChange={cargarIdEmprendedor} value={guardarEmprendedor || ""} required>
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
      )} */}
    </div>
  );
}

export default ProductListEdit;


