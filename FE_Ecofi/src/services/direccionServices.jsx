export async function getDireccion() {
    try {
        const response = await fetch('http://localhost:3000/direccion', {
            method: 'GET',
            credentials: "include", // Importante para manejar sesiones
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching las Direcciones');
        }

        const admins = await response.json();
        return admins;
    } catch (error) {
        console.error('Error fetching Dirección:', error);
        throw error;
    }
}