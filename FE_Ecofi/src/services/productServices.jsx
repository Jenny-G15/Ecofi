// Obtener todos los productos
export async function getProductos() {
    try {
        const response = await fetch('http://192.168.8.114:3000/producto', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error fetching products');
        }

        const productos = await response.json();
        return productos;
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
            Bicolones_Producto, 
            Imagen, 
            Stock, 
            Descripcion_Producto
        };
        console.log(productoData);
        
        const response = await fetch('http://192.168.8.114:3000/producto', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productoData),
        });

        if (!response.ok) {
            throw new Error('Error adding product');
        }

    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
}



// Actualizar un producto existente
export async function updateProducto(
    id, 
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
            Bicolones_Producto, 
            Imagen, 
            Stock, 
            Descripcion_Producto
        };
        const response = await fetch(`http://192.168.8.114:3000/producto/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productoData),
        });

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
        const response = await fetch(`http://192.168.8.114:3000/producto/${id}`, {
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



// // Eliminar un producto
// export async function deleteProducto(id) {
//     try {
//         const response = await fetch(`http://192.168.100.121:3000/producto${id}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });

//         if (!response.ok) {
//             throw new Error('Error deleting product');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error("Error deleting product:", error);
//         throw error;
//     }
// }
