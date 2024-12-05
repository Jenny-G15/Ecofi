// services/RecofiService.js

export async function getRecofis() {
    try {
        // Ajusta la URL si el backend está en otro puerto o dirección
        const response = await fetch('http://localhost:3000/recofis', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Si la respuesta no es ok, lanzamos un error
        if (!response.ok) {
            throw new Error('Error al obtener los recofis');
        }

        // Convertimos la respuesta a JSON
        const recofis = await response.json();
        return recofis; // Devuelve los recofis
    } catch (error) {
        console.error('Error al obtener los recofis:', error);
        throw error; // Lanza el error para que se pueda manejar en otro lugar
    }
}
