

export async function getRecofis() {
    try {
        // Ajusta la URL si el backend está en otro puerto o dirección
        const response = await fetch('http://192.168.0.4:3000/recofi', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Si la respuesta no es ok, lanzamos un error
        if (!response.ok) {
            throw new Error('Error al obtener los recofis prueba');
        }

        // Convertimos la respuesta a JSON
        const recofis = await response.json();
        return recofis; 
    } catch (error) {
        console.error('Error al obtener los recofis prueba:', error);
        throw error; 
    }
}



// Agregar un nuevo Recofi
export async function agregarRecofi(data) {
    try {
        const response = await fetch('http://192.168.0.4:3000/recofi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Error creando el Recofi');
        }

        return await response.json();
    } catch (error) {
        console.error('Error  creando el Recofi:', error);
        throw error;
    }
}

// Actualizar un Recofi existente
export async function actualizarRecofi(id, data) {
    try {
        const response = await fetch(`http://192.168.0.4:3000/recofi/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Error updating recofi');
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating recofi:', error);
        throw error;
    }
}

// Eliminar un Recofi
export async function eliminarRecofi(id) {
    try {
        const response = await fetch(`http://192.168.0.4:3000/recofi/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error deleting recofi');
        }

        return await response.text(); 
    } catch (error) {
        console.error('Error deleting recofi:', error);
        throw error;
    }
}