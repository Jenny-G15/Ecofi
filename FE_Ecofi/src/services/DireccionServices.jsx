export async function getDireccion() {
    try {
        const response = await fetch('http://192.168.1.246:3000/direccion', {
            method: 'GET',
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