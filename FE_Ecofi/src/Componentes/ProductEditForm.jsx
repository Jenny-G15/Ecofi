// import React, { useState } from "react";
// import { updateProducto } from "../services/productServices";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../styles/Admin.css";

// function ProductEditForm({ product, onClose }) {
//   if (!product) {
//     return null; // No muestra nada si no hay producto
//   }

//   const [formData, setFormData] = useState({
//     Bicolones_Producto: product.Bicolones_Producto,
//     Imagen: product.Imagen, // Corregí el typo: "imagen" debe ser "Imagen" para coincidir con los datos originales.
//     Stock: product.Stock,
//     Descripcion_Producto: product.Descripcion_Producto,
//   });

//   const productChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const productAct = async (e) => {
//     e.preventDefault();
//     try {
//       await updateProducto(product.id, formData); // Paso los datos como objeto
//       toast.success("Producto actualizado con éxito");
//       if (onClose) onClose(); // Valido si onClose está definido
//     } catch (error) {
//       console.error("Error actualizando producto:", error);
//       toast.error("Hubo un error al actualizar el producto");
//     }
//   };

//   return (
//     <div id="edit-form-container">
//       <h3 id="edit-form-title">Editar Producto</h3>
//       <form id="edit-form" onSubmit={productAct}>
//         <input
//           id="input-bicolones"
//           type="text"
//           name="Bicolones_Producto"
//           value={formData.Bicolones_Producto}
//           onChange={productChange}
//           placeholder="Bicolones"
//           required
//         />
//         <input
//           id="input-descripcion"
//           type="text"
//           name="Descripcion_Producto"
//           value={formData.Descripcion_Producto}
//           onChange={productChange}
//           placeholder="Descripción"
//           required
//         />
//         <input
//           id="input-stock"
//           type="number"
//           name="Stock"
//           value={formData.Stock}
//           onChange={productChange}
//           placeholder="Stock"
//           required
//         />
//         <input
//           id="input-imagen"
//           type="text"
//           name="Imagen"
//           value={formData.Imagen}
//           onChange={productChange}
//           placeholder="URL Imagen"
//         />
//         <div id="form-buttons">
//           <button id="save-button" type="submit">
//             Guardar cambios
//           </button>
//           <button id="cancel-button" type="button" onClick={onClose}>
//             Cancelar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default ProductEditForm;

