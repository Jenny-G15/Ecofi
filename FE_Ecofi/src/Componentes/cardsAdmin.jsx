import React, { useCallback, useEffect, useState } from "react";
import cargarImagen from "../Firebase/config"; // Asegúrate de tener esta configuración
import "../styles/admin.css";
import { getEmprendedores } from "../services/emprendedorServices";
import { PostProductos } from "../services/productServices";

function CardsAdmin() {
  const [emprendedor, setEmprendedor] = useState([]);
  const [Image, setImage] = useState("");
  const [stock, setStock] = useState("");
  const [bicolones, setBicolones] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() =>{
    async function obtenerEmprendedores() {
      const obtenerEmprendedores = await getEmprendedores()
      setEmprendedor(obtenerEmprendedores)
    }
    obtenerEmprendedores()
  }, []) 
  
  // const [editando, setEditando] = useState(false);
  // const [editData, setEditData] = useState(null);

  // Función para cargar la imagen a Firebase Storage
  // const cargarImagen = async (file) => {
  //   const fileRef = ref(storage, `uploads/${file.name}`);
  //   await uploadBytes(fileRef, file);
  //   return getDownloadURL(fileRef);
  // };

  // Función para cargar productos desde Firestore
  // const loadProductos = useCallback(async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "productos"));
  //     const productosData = querySnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setProductos(productosData);
  //   } catch (error) {
  //     console.error("Error loading products:", error);
  //   }
  // }, []);

  // useEffect(() => {
  //   loadProductos();
  // }, [loadProductos]);

  const cargarImagenFirebase =  async (e) =>{
    console.log(e)
    const obtenerImagen = e.target.files[0]
    setImage(obtenerImagen)

    if(obtenerImagen) {
      const subirImagen = await cargarImagen(obtenerImagen)
      setImage(subirImagen)
    }
  }

  const agregarProducto = async () =>{
    await PostProductos(emprendedor, bicolones, Image, stock, description)
  }

  // Agregar un producto
  // const addProduct = async (e) => {
  //   e.preventDefault();
  //   if (!Image) {
  //     alert("Por favor selecciona una imagen");
  //     return;
  //   }
  //   try {
  //     // const imageURL = await cargarImagen(Image);
  //     // await addDoc(collection(db, "productos"), {
  //     //   nombre: name,
  //     //   precio: price,
  //     //   descripcion: description,
  //     //   imagen: imageURL,
  //     // });
  //     // resetForm();
  //     // loadProductos();
  //   } catch (error) {
  //     console.error("Error adding product:", error);
  //   }
  // };

  // Editar un producto
  // const guardarEdicion = async () => {
  //   if (!editData) return;
  //   try {
  //     const productRef = doc(db, "productos", editData.id);
  //     await updateDoc(productRef, {
  //       nombre: editData.nombre,
  //       precio: editData.precio,
  //       descripcion: editData.descripcion,
  //       imagen: editData.imagen,
  //     });
  //     setEditando(false);
  //     setEditData(null);
  //     // loadProductos();
  //   } catch (error) {
  //     console.error("Error updating product:", error);
  //   }
  // };

  // Eliminar un producto
  // const eliminarProducto = async (id, imagenUrl) => {
  //   try {
  //     // Elimina de Firestore
  //     await deleteDoc(doc(db, "productos", id));
  //     // Elimina de Storage
  //     const imageRef = ref(storage, imagenUrl);
  //     await deleteObject(imageRef);
  //     // loadProductos();
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //   }
  // };

  // const resetForm = () => {
  //   setName("");
  //   setPrice("");
  //   setDescription("");
  //   setBaseImage(null);
  // };

  console.log('emprendedor', emprendedor)
  return (
    <div id="agregar-producto">
      <form id="form-agregar-producto" onSubmit={agregarProducto}>
        <input
          type="file"
          onChange={cargarImagenFirebase}
          required
        />
        <select name="" id="">
          <option value="">Seleccione un emprendedor</option>
        {
          emprendedor.map((emprendedor) => {
            return <option key={emprendedor.id} value={emprendedor.id}>{emprendedor.Nombre_Emprendedor}</option>;
          })
        }
        </select>
        <input
          type="text"
          value={bicolones}
          onChange={(e) => setBicolones(e.target.value)}
          placeholder="Precio"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
          required
        />
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          required
        />
        <button type="submit">Agregar producto</button>
      </form>

      {/* {editando && editData && (
        <div id="editar-producto">
          <h3>Editar Producto</h3>
          <input
            type="text"
            value={editData.nombre}
            onChange={(e) =>
              setEditData({ ...editData, nombre: e.target.value })
            }
          />
          <input
            type="text"
            value={editData.precio}
            onChange={(e) =>
              setEditData({ ...editData, precio: e.target.value })
            }
          />
          <input
            type="text"
            value={editData.descripcion}
            onChange={(e) =>
              setEditData({ ...editData, descripcion: e.target.value })
            }
          />
          <button onClick={guardarEdicion}>Guardar</button>
          <button onClick={() => setEditando(false)}>Cancelar</button>
        </div>
      )}

      <div className="cardProducts">
        {productos.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imagen}
              alt={product.nombre}
              style={{ width: "100px", height: "100px" }}
            />
            <h3>{product.nombre}</h3>
            <p>Precio: {product.precio}</p>
            <p>{product.descripcion}</p>
            <button onClick={() => eliminarProducto(product.id, product.imagen)}>
              Eliminar
            </button>
            <button
              onClick={() => {
                setEditando(true);
                setEditData(product);
              }}
            >
              Editar
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default CardsAdmin;
