import React, { useState, useEffect } from 'react';
import { getUsers, PostUsers, deleteUser } from '../services/userServices'; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/AgregarAdministradores.css';
import { Button } from 'react-bootstrap';





const AgregarAdministradores = () => {

    const [administradores, setAdministradores] = useState([]); // Lista de administradores
    const [formData, setFormData] = useState({
        Nombre_Usuario: '',
        Apellido_Usuario: '',
        Cedula: '',
        Email_Usuario: '',
        Contraseña_Usuario: '',
        Telefono_Usuario: '',
        Bicolones: 0,
        Rol_Usuario: 'Administrador' // Rol fijo como Administrador
    });

    // Cargar administradores al cargar el componente
    useEffect(() => {
        cargarAdministradores();
    }, []);

    const cargarAdministradores = async () => {
        try {
            const data = await getUsers(); // Obtener todos los usuarios
            const admins = data.filter(user => user.Rol_Usuario === 'Administrador'); // Filtrar solo administradores
            setAdministradores(admins);
        } catch (error) {
            console.error('Error al cargar administradores:', error);
        }
    };

    const agregarAdministrador = async () => {
        const { Nombre_Usuario, Apellido_Usuario, Cedula, Email_Usuario, Contraseña_Usuario, Telefono_Usuario, Rol_Usuario, Bicolones } = formData;

        if (!Nombre_Usuario || !Apellido_Usuario || !Cedula || !Email_Usuario || !Contraseña_Usuario || !Telefono_Usuario || !Rol_Usuario) {
            toast.error("Por favor, completa todos los campos.");
            return;
        }

        try {
            // Llama al servicio para registrar un nuevo usuario con rol de Administrador
            const nuevoAdministrador = await PostUsers(
                Nombre_Usuario,
                Apellido_Usuario,
                Cedula,
                Email_Usuario,
                Contraseña_Usuario,
                Telefono_Usuario,
                Rol_Usuario,
                Bicolones,
                "Administrador" // Asegurar el rol de Administrador
            );

            setAdministradores([...administradores, nuevoAdministrador.usuario]); // Actualizar con el nuevo administrador
            setFormData({
                Nombre_Usuario: '',
                Apellido_Usuario: '',
                Cedula: '',
                Email_Usuario: '',
                Contraseña_Usuario: '',
                Telefono_Usuario: '',
                Rol_Usuario: 'Administrador',
                Bicolones: 0,
            });
            toast.success("Administrador agregado exitosamente.");
        } catch (error) {
            console.error('Error al agregar administrador:', error);
            toast.error("Error al agregar administrador.");
        }
    };

    const eliminarAdministrador = async (id) => {
        try {
            await deleteUser(id); // Eliminar administrador
            setAdministradores(administradores.filter(admin => admin.id !== id));
            toast.success("Administrador eliminado exitosamente.");
        } catch (error) {
            console.error('Error al eliminar administrador:', error);
            toast.error("Error al eliminar administrador.");
        }
    };

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="administradoresContainer">
            <h2 id="h2Titulo">Agregar Administradores</h2>
            <div className="administradoresContainer2">
                <div className="containerAdministradores">
                    <input
                        type="text"
                        placeholder="Nombre del Administrador"
                        name="Nombre_Usuario"
                        value={formData.Nombre_Usuario}
                        onChange={manejarCambio}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Apellido del Administrador"
                        name="Apellido_Usuario"
                        value={formData.Apellido_Usuario}
                        onChange={manejarCambio}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Cédula"
                        name="Cedula"
                        value={formData.Cedula}
                        onChange={manejarCambio}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Correo del Administrador"
                        name="Email_Usuario"
                        value={formData.Email_Usuario}
                        onChange={manejarCambio}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="Contraseña_Usuario"
                        value={formData.Contraseña_Usuario}
                        onChange={manejarCambio}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Teléfono del Administrador"
                        name="Telefono_Usuario"
                        value={formData.Telefono_Usuario}
                        onChange={manejarCambio}
                        required
                    />
                    <Button id="btnAgregarAdministrador" onClick={agregarAdministrador}>
                        Agregar Administrador
                    </Button>
                </div>
                <div id="contenedorAdministradores">
    {administradores && administradores.length > 0 ? (
        administradores.map((admin) => (
            <div key={admin.id} className="administrador">
                {admin.Nombre_Usuario && admin.Apellido_Usuario && admin.Cedula ? (
                    `Administrador: ${admin.Nombre_Usuario} ${admin.Apellido_Usuario} - Cédula: ${admin.Cedula}`
                ) : (
                    <p>Administrador con datos incompletos</p>
                )}
                <div className="btnContainer">
                    <Button
                        id="btnAdministradorDelete"
                        onClick={() => eliminarAdministrador(admin.id)}
                    >
                        Eliminar
                    </Button>
                </div>
            </div>
        ))
    ) : (
        <p>No hay administradores disponibles</p>
    )}
</div>
            </div>
        </div>
    );
};

export default AgregarAdministradores;



