export async function getFormulario() {
    try {
        // Ajusta la URL si el backend está en otro puerto o dirección
        const response = await fetch('http://localhost:3000/formularios', {  //http://192.168.1.246  //http://192.168.100.121
        const response = await fetch('http://192.168.1.246:3000/formularios', {  //http://192.168.1.246  //http://192.168.100.121
            method: 'GET',
            credentials: "include", // Importante para manejar sesiones
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Si la respuesta no es ok, lanzamos un error
        if (!response.ok) {
            throw new Error('Error al obtener los Formularios');
        }

        // Convertimos la respuesta a JSON
        const formularios = await response.json();
        return formularios; 
    } catch (error) {
        console.error('Error al obtener los Formularios:', error);
        throw error; 
    }
}



// Agregar un nuevo Formulario
export async function agregarFormulario(data) {
    try {
        const response = await fetch('http://localhost:3000/formularios', {
        const response = await fetch('http://192.168.1.246:3000/formularios', {
            method: 'POST',
            credentials: "include", // Importante para manejar sesiones
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
        const response = await fetch(`http://192.168.1.246:3000/formularios/${id}`, {
            method: 'PUT',
            credentials: "include", // Importante para manejar sesiones
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
        const response = await fetch(`http://192.168.1.246:3000/formularios/${id}`, {
            method: 'DELETE',
            credentials: "include", // Importante para manejar sesiones
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