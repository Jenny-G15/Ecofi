

export async function getMateriales() {
    try {
        // Ajusta la URL si el backend está en otro puerto o dirección
        const response = await fetch('http://192.168.0.4:3000/material', { //'http://192.168.0.4
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Si la respuesta no es ok, lanzamos un error
        if (!response.ok) {
            throw new Error('Error al obtener los Materiales');
        }

        // Convertimos la respuesta a JSON
        const materiales = await response.json();
        return materiales; 
    } catch (error) {
        console.error('Error al obtener los recofis prueba:', error);
        throw error; 
    }
}
