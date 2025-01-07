// Obtener todos los productos
// Obtener todos los productos
export async function getProductos() {
    try {
        const response = await fetch('http://192.168.1.246:3000/producto/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error fetching products');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

// Agregar un nuevo producto
export async function PostProductos(
    ID_Emprendedor, 
    Nombre_Producto,
    Bicolones_Producto, 
    Imagen, 
    Stock, 
    Descripcion_Producto
) {
    try {
        const productoData = {
            ID_Emprendedor, 
            Nombre_Producto,
            Bicolones_Producto: Number(Bicolones_Producto), // Convertir a número
            Imagen, 
            Stock: Number(Stock), // Convertir a número
            Descripcion_Producto
        };

        console.log("Enviando producto:", productoData);
        
        const response = await fetch('http://192.168.1.246:3000/producto/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productoData),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            console.error('Error en respuesta del servidor:', errorResponse);
            throw new Error(errorResponse.error || 'Error adding product');
        }

        return await response.json();
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
}

// Actualizar un producto existente
export async function updateProducto(
    id, 
    datosActualizados
) {
    try {
        const response = await fetch(`http://192.168.1.246:3000/producto/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosActualizados),
        });
        console.log("Respuesta del servidor:", response);
        

        if (!response.ok) {
            throw new Error('Error updating product');
        }

        return await response.json();
    } catch (error) {
        console.log(error);
        console.error("Error updating product:", error);
        throw error;
    }
}

// Eliminar un producto
export async function deleteProducto(id) {
    try {
        const response = await fetch(`http://192.168.1.246:3000/producto/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Verifica si la respuesta es exitosa
        if (response.ok) {
            console.log('Producto eliminado con éxito');
            return { message: 'Producto eliminado con éxito' }; // Devuelve un mensaje de éxito
        } else {
            console.error('No se pudo eliminar el producto');
            throw new Error('No se pudo eliminar el producto');
        }
    } catch (error) {
        console.error("Error eliminando producto:", error);
        throw error; // Relanza el error si es necesario manejarlo en otro lugar
    }
}

export const stockActualizado = async (id, nuevoStock) => {
    try {
      const response = await fetch( `http://192.168.1.246:3000/producto/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Stock: nuevoStock }),
      });
  
      if (!response.ok) {
        const errorData = await response.json(); // Try to get error details from server
        throw new Error( `Error al actualizar el stock: ${response.status} - ${errorData.message} - ${errorData.details}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error al actualizar el stock:', error);
      throw error; 
    }
  };
