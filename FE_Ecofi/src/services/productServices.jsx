export async function PostProductos
      (ID_Emprendedor, 
        Bicolones_Producto, 
        Imagen,
        Stock,
        Descripcion_Producto) {
    try {
        const productoData = {
            ID_Emprendedor, 
            Bicolones_Producto, 
            Imagen,
            Stock,
            Descripcion_Producto
        };
        const response = await fetch('http://localhost:3000/productos/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productoData),
        });
        return await response.json();
    } catch (error) {
        console.error("Error en el servidor", error);
        throw error;
    }
}
