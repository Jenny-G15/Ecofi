// Obtener todos los productos
export async function getProductos() {
    try {
        const response = await fetch('http://192.168.100.121:/productos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching Products');
        }

        const productos = await response.json();
        return productos;
    } catch (error) {
        console.error('Error fetching Products:', error);
        throw error;
    }
}

// Agregar un nuevo producto
export async function PostProductos(
    ID_Emprendedor, 
    Bicolones_Producto, 
    Imagen, 
    Stock, 
    Descripcion_Producto
) {
    try {
        const productoData = {
            ID_Emprendedor, 
            Bicolones_Producto, 
            Imagen, 
            Stock, 
            Descripcion_Producto
        };
        const response = await fetch('http://192.168.100.121:/productos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productoData),
        });

        if (!response.ok) {
            throw new Error('Error adding product');
        }

        return await response.json();
    } catch (error) {
        console.error("Error adding product:", error);
        throw error;
    }
}

// Actualizar un producto existente
export async function updateProducto(
    id, 
    ID_Emprendedor, 
    Bicolones_Producto, 
    Imagen, 
    Stock, 
    Descripcion_Producto
) {
    try {
        const productoData = {
            ID_Emprendedor, 
            Bicolones_Producto, 
            Imagen, 
            Stock, 
            Descripcion_Producto
        };
        const response = await fetch(`http://192.168.100.121:/productos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productoData),
        });

        if (!response.ok) {
            throw new Error('Error updating product');
        }

        return await response.json();
    } catch (error) {
        console.error("Error updating product:", error);
        throw error;
    }
}

// Eliminar un producto
export async function deleteProducto(id) {
    try {
        const response = await fetch(`http://192.168.100.121:/productos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error('Error deleting product');
        }

        return await response.json();
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
}
