import React, { useState, useEffect } from 'react';
import { getAdminRecofis, postAdminRecofis, deleteAdminRecofis, updateAdminRecofis } from '../services/AdminRecofis'; // Asegúrate de importar updateAdminRecofis
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/AgregarAdministradores.css';
import { Button } from 'react-bootstrap';

const AgregarAdminRecofis = () => {
    const [administradores, setAdministradores] = useState([]); // Lista de administradores
    const [formData, setFormData] = useState({
        Nombre_AdminRecofis: '',
        Apellido_AdminRecofis: '',
        Correo_AdminRecofis: '',
        Contraseña_AdminRecofis: '',
        Telefono_AdminRecofis: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [currentAdminId, setCurrentAdminId] = useState(null); // Almacena el ID del administrador actual

    // Cargar administradores al cargar el componente
    useEffect(() => {
        cargarAdministradores();
    }, []);

    const cargarAdministradores = async () => {
        try {
            const data = await getAdminRecofis(); // Obtener todos los administradores
            setAdministradores(data);
        } catch (error) {
            console.error('Error al cargar administradores:', error);
        }
    };

    const agregarAdministrador = async () => {
        const { Nombre_AdminRecofis, Apellido_AdminRecofis, Correo_AdminRecofis, Contraseña_AdminRecofis, Telefono_AdminRecofis } = formData;

        if (!Nombre_AdminRecofis || !Apellido_AdminRecofis || !Correo_AdminRecofis || !Contraseña_AdminRecofis || !Telefono_AdminRecofis) {
            toast.error("Por favor, completa todos los campos.");
            return;
        }

        try {
            // Llama al servicio para registrar un nuevo administrador
            const nuevoAdministrador = await postAdminRecofis(
                Nombre_AdminRecofis,
                Apellido_AdminRecofis,
                Correo_AdminRecofis,
                Contraseña_AdminRecofis,
                Telefono_AdminRecofis
            );

            setAdministradores([...administradores, nuevoAdministrador.administrador]); // Actualizar con el nuevo administrador
            setFormData({
                Nombre_AdminRecofis: '',
                Apellido_AdminRecofis: '',
                Correo_AdminRecofis: '',
                Contraseña_AdminRecofis: '',
                Telefono_AdminRecofis: '',
            });
            toast.success("Administrador agregado exitosamente.");
        } catch (error) {
            console.error('Error al agregar administrador:', error);
            toast.error("Error al agregar administrador.");
        }
    };

    const eliminarAdministrador = async (id) => {
        try {
            await deleteAdminRecofis(id); // Eliminar administrador
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

    const editarAdministrador = async () => {
        const { Nombre_AdminRecofis, Apellido_AdminRecofis, Correo_AdminRecofis, Contraseña_AdminRecofis, Telefono_AdminRecofis } = formData;

        if (!Nombre_AdminRecofis || !Apellido_AdminRecofis || !Correo_AdminRecofis || !Contraseña_AdminRecofis || !Telefono_AdminRecofis) {
            toast.error("Por favor, completa todos los campos.");
            return;
        }

        try {
            const actualizadoAdmin = await updateAdminRecofis(currentAdminId, Nombre_AdminRecofis, Apellido_AdminRecofis, Correo_AdminRecofis, Contraseña_AdminRecofis, Telefono_AdminRecofis);
            setAdministradores(administradores.map(admin => (admin.id === currentAdminId ? actualizadoAdmin.administrador : admin)));
            setFormData({
                Nombre_AdminRecofis: '',
                Apellido_AdminRecofis: '',
                Correo_AdminRecofis: '',
                Contraseña_AdminRecofis: '',
                Telefono_AdminRecofis: '',
            });
            setIsEditing(false);
            setCurrentAdminId(null);
            toast.success("Administrador editado exitosamente.");
        } catch (error) {
            console.error('Error al editar administrador:', error);
            toast.error("Error al editar administrador.");
        }
    };

    const iniciarEdicion = (admin) => {
        setFormData({
            Nombre_AdminRecofis: admin.Nombre_AdminRecofis,
            Apellido_AdminRecofis: admin.Apellido_AdminRecofis,
            Correo_AdminRecofis: admin.Correo_AdminRecofis,
            Contraseña_AdminRecofis: admin.Contraseña_AdminRecofis,
            Telefono_AdminRecofis: admin.Telefono_AdminRecofis,
        });
        setCurrentAdminId(admin.id);
        setIsEditing(true);
    };

    return (
        <div className="administradorContainer">
            <h2 id="h2Titulo">Agregar Administradores de Recofis</h2>
            <div className="administradoresContainer2">
                <div className="containerAdministradores">
                    <input
                        type="text"
                        placeholder="Nombre del Administrador"
                        name="Nombre_AdminRecofis"
                        value={formData.Nombre_AdminRecofis}
                        onChange={manejarCambio}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Apellido del Administrador"
                        name="Apellido_AdminRecofis"
                        value={formData.Apellido_AdminRecofis}
                        onChange={manejarCambio}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Correo del Administrador"
                        name="Correo_AdminRecofis"
                        value={formData.Correo_AdminRecofis}
                        onChange={manejarCambio}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="Contraseña_AdminRecofis"
                        value={formData.Contraseña_AdminRecofis}
                        onChange={manejarCambio}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Teléfono del Administrador"
                        name="Telefono_AdminRecofis"
                        value={formData.Telefono_AdminRecofis}
                        onChange={manejarCambio}
                        required
                    />
                    {isEditing ? (
                        <Button id="btnEditarAdminRecofi" onClick={editarAdministrador}>
                            Editar Administrador
                        </Button>
                    ) : (
                        <Button id="btnAgregarAdminRecofi" onClick={agregarAdministrador}>
                            Agregar Administrador
                        </Button>
                    )}
                </div>
                <div id="contenedorAdministradores">
                    {administradores && administradores.length > 0 ? (
                        administradores.map((admin) => (
                            <div key={admin.id} className="administrador">
                                {admin.Nombre_AdminRecofis && admin.Apellido_AdminRecofis ? (
                                    `Administrador: ${admin.Nombre_AdminRecofis} ${admin.Apellido_AdminRecofis}`
                                ) : (
                                    <p>Administrador con datos incompletos</p>
                                )}
                                <div className="btnContainer">
                                    <Button
                                        id="btnEditarAdminRecofi"
                                        onClick={() => iniciarEdicion(admin)}
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        id="btnEliminarAdminRecofi"
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

export default AgregarAdminRecofis;
