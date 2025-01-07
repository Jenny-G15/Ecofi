import React, { useState, useEffect } from 'react';
import { getUsers, PostUsers, deleteUser, updateUser } from '../services/userServices'; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/AgregarAdministradores.css';
import { Button } from 'react-bootstrap';


const AgregarAdministradores = () => {
    const [administradores, setAdministradores] = useState([]);
    const [formData, setFormData] = useState({
        Nombre_Usuario: '',
        Apellido_Usuario: '',
        Cedula: '',
        Email_Usuario: '',
        Contraseña_Usuario: '',
        Telefono_Usuario: '',
        Bicolones: 0,
        Rol_Usuario: 'Administrador',
    });

    const [editMode, setEditMode] = useState(null); // Estado para manejar el modo de edición
    const [editData, setEditData] = useState({}); // Estado para los datos en edición

    useEffect(() => {
        cargarAdministradores();
    }, []);

    const cargarAdministradores = async () => {
        try {
            const data = await getUsers();
            const admins = data.filter(user => user.Rol_Usuario === 'Administrador');
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
            const nuevoAdministrador = await PostUsers(
                Nombre_Usuario,
                Apellido_Usuario,
                Cedula,
                Email_Usuario,
                Contraseña_Usuario,
                Telefono_Usuario,
                Rol_Usuario,
                Bicolones,
                "Administrador"
            );

            setAdministradores([...administradores, nuevoAdministrador.usuario]);
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
            await deleteUser(id);
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

    const activarEdicion = (admin) => {
        setEditMode(admin.id);
        setEditData({ ...admin });
    };

    const manejarCambioEdicion = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };


    const guardarEdicion = async () => {
        try {
            console.log('Datos a enviar:', editMode, editData);
            const actualizado = await updateUser(
                editMode,
                editData.Nombre_Usuario,
                editData.Apellido_Usuario,
                editData.Cedula,
                editData.Email_Usuario,
                editData.Contraseña_Usuario,
                editData.Telefono_Usuario,
                editData.Bicolones
            );
            console.log('Usuario actualizado:', actualizado); // Verifica la respuesta
            
            // Aquí no verificamos actualizado.usuario, ya que actualizado es directamente el objeto del usuario
            const nuevosAdministradores = administradores.map(admin => 
                admin.id === editMode ? actualizado : admin
            );
    
            // Verifica si hay algún objeto undefined en nuevosAdministradores
            if (nuevosAdministradores.includes(undefined)) {
                throw new Error('Hay un objeto undefined en la lista de administradores');
            }
    
            setAdministradores(nuevosAdministradores);
            setEditMode(null);
            toast.success("Administrador actualizado exitosamente.");
        } catch (error) {
            console.error('Error al actualizar administrador:', error);
            toast.error("Error al actualizar administrador.");
        }
    };
    
    

    return (
        <div className="administradoresContainer">
            <h2 id="h2Titulo">Agregar Administradores</h2>
            <div className="administradoresContainer2">
                <div className="containerAdministradores">
                    {/* Formulario de nuevo administrador */}
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
                    <Button id="btnAgregarAdministradorRecofi" onClick={agregarAdministrador}>
                        Agregar Administrador
                    </Button>
                </div>
                <div id="contenedorAdministradores">
                    <h3 className='ListaAdminText'>Lista de Administradores</h3>
                    {administradores.length > 0 ? (
                        administradores.map((admin) => (
                            <div key={admin.id} className="administrador">
                                {editMode === admin.id ? (
                                    <>
                                        <input
                                            type="text"
                                            name="Nombre_Usuario"
                                            value={editData.Nombre_Usuario}
                                            onChange={manejarCambioEdicion}
                                        />
                                        <input
                                            type="text"
                                            name="Apellido_Usuario"
                                            value={editData.Apellido_Usuario}
                                            onChange={manejarCambioEdicion}
                                        />
                                        <input
                                            type="text"
                                            name="Cedula"
                                            value={editData.Cedula}
                                            onChange={manejarCambioEdicion}
                                        />
                                        <Button id='ButtonAdmin' onClick={guardarEdicion}>Guardar</Button>
                                        <Button onClick={() => setEditMode(null)}>Cancelar</Button>
                                    </>
                                ) : (
                                    <>
                                        {`Administrador: ${admin.Nombre_Usuario} ${admin.Apellido_Usuario} - Cédula: ${admin.Cedula}`}
                                        <div className="btnContainer">
                                            <Button onClick={() => activarEdicion(admin)}>Editar</Button>
                                            <Button onClick={() => eliminarAdministrador(admin.id)}>Eliminar</Button>
                                        </div>
                                    </>
                                )}
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
