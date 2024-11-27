export async function getUsers() {
    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}



export const getProductos = async () => {
    try {
        const response = await fetch('http://localhost:3000/productos');
        if (!response.ok) {
            throw new Error("Error al obtener productos");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};




export const getAdmins = async () => {
    try {
        const response = await fetch('http://localhost:3000/Admins');
        if (!response.ok) {
            throw new Error("Error al obtener la lista de Administradores");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};