import React, { useState } from "react";
import { deleteProducto } from "../services/productServices";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Admin.css";

function ProductList({ productos }) {
  const [isLoading, setIsLoading] = useState(false);

  if (!Array.isArray(productos)) {
    return  toast.success("error");; // Mensaje si no hay productos
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
        <div key={product.id} id={`product-card-${product.id}`} className="product-card">
          <img
            id={`product-image-${product.id}`}
            src={product.imagen}
            alt={product.nombre}
            style={{ width: "100px", height: "100px" }}
          />
          <h3 id={`product-name-${product.id}`}>{product.nombre}</h3>
          <p id={`product-price-${product.id}`}>Precio: {product.precio}</p>
          <p id={`product-description-${product.id}`}>{product.descripcion}</p>
          <button
            id={`delete-button-${product.id}`}
            disabled={isLoading}
            onClick={() => productDelete(product.id)}
          >
            {isLoading ? "Eliminando..." : "Eliminar"}
          </button>
          <button
            id={`edit-button-${product.id}`}
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
