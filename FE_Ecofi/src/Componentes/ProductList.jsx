import React, { useState } from "react";
import { deleteProducto } from "../services/productServices";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Admin.css";

function ProductList({ productos }) {
  const [isLoading, setIsLoading] = useState(false);

  if (!Array.isArray(productos)) {
    return  toast.success("error"); // Mensaje si no hay productos
  }

  const productDelete = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (!confirmDelete) return;
    setIsLoading(true);
    try {
      await deleteProducto(id);
      toast.success("Producto eliminado con éxito");
    } catch (error) {
      console.error("Error eliminando producto:", error);
      toast.error("Hubo un error al eliminar el producto");
    } finally {
      setIsLoading(false);
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
          <p> {product.ID_Emprendedor.Nombre_Emprendedor}</p>
          <p> {product.Bicolones_Producto}</p>
          <p>{product.Descripcion_Producto}</p>
          <p>{product.Stock}</p>

          <button disabled={isLoading} onClick={() => productDelete(product.id)}>{isLoading ? "Eliminando..." : "Eliminar"}</button>
          <button

            onClick={() => onEdit(product)}
          >
            Editar
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
