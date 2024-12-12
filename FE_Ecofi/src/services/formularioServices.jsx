export async function getFormulario() {
    try {
        // Ajusta la URL si el backend está en otro puerto o dirección
        const response = await fetch('http://localhost:3000/formularios', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Si la respuesta no es ok, lanzamos un error
        if (!response.ok) {
            throw new Error('Error al obtener los Formularios');
        }

        // Convertimos la respuesta a JSON
        const recofis = await response.json();
        return recofis; 
    } catch (error) {
        console.error('Error al obtener los Formularios:', error);
        throw error; 
    }
}



// Agregar un nuevo Formulario
export async function agregarFormulario(data) {
    try {
        const response = await fetch('http://localhost:3000/formularios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Error creando el Formulario');
        }

        return await response.json();
    } catch (error) {
        console.error('Error creando el Formulario:', error);
        throw error;
    }
}

// Actualizar un Formulario existente
export async function actualizaFormulario(id, data) {
    try {
        const response = await fetch(`http://localhost:3000/formularios/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Error actualizando el Formulario');
        }

        return await response.json();
    } catch (error) {
        console.error('Error actualzando el Formulario:', error);
        throw error;
    }
}

// Eliminar un Formulario
export async function eliminarFormulario(id) {
    try {
        const response = await fetch(`http://localhost:3000/formularios/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error eliminando el Formulario');
        }

        return await response.text(); 
    } catch (error) {
        console.error('Error eliminando el Formulario:', error);
        throw error;
    }
}