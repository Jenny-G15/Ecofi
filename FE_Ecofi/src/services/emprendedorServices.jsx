// Obtener todos los emprendedores
export async function getEmprendedores() {
    try {
        const response = await fetch('http://localhost:3000/emprendedores ', { 
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error fetching emprendedores');
        }

        const emprendedores = await response.json();
        return emprendedores;
    } catch (error) {
        console.error('Error fetching emprendedores:', error);
        throw error;
    }
}

// Agregar un nuevo emprendedor
export async function PostEmprendedores(
    Nombre_Emprendedor,
    Descripcion,
    Nombre_Contacto,
    Producto_Ofrecido,
    Correo_Emprendedor,
    Telefono_Empresa,
    Direccion_Exacta
) {
    try {
        const emprendedorData = {
            Nombre_Emprendedor,
            Descripcion,
            Nombre_Contacto,
            Producto_Ofrecido,
            Correo_Emprendedor,
            Telefono_Empresa,
            Direccion_Exacta,
        };

        const response = await fetch('http://localhost:3000/emprendedores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emprendedorData),
        });

        if (!response.ok) {
            throw new Error('Error adding emprendedor');
        }

        return await response.json();
    } catch (error) {
        console.error('Error adding emprendedor:', error);
        throw error;
    }
}


// Actualizar un emprendedor existente
export async function updateEmprendedor(id, emprendedorData) {
    try {
        const response = await fetch(`http://localhost:3000/emprendedores/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emprendedorData),
        });

        if (!response.ok) {
            const errorDetails = await response.json();
            throw new Error(`Error updating emprendedor: ${errorDetails.message}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating emprendedor:', error);
        throw error;
    }
}


// Eliminar un emprendedor
export async function deleteEmprendedor(id) {
    try {
        const response = await fetch(`http://localhost:3000/emprendedores/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error deleting emprendedor');
        }

    } catch (error) {
        console.error('Error deleting emprendedor:', error);
        throw error;
    }
}
