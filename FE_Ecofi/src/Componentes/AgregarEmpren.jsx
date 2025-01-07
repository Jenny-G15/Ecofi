// Importamos las funciones y componentes necesarios de React y otras librerías
import React, { useState, useEffect } from 'react';
import { getEmprendedores, PostEmprendedores, updateEmprendedor, deleteEmprendedor } from '../services/emprendedorServices';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/AgregarEmprendedores.css';
import { Button } from 'react-bootstrap';

// Componente principal para agregar emprendedores
const AgregarEmprendedores = () => {
    const [emprendedores, setEmprendedores] = useState([]); // Lista de emprendedores
    const [formData, setFormData] = useState({
        Nombre_Emprendedor: '',
        Descripcion: '',
        Nombre_Contacto: '',
        Producto_Ofrecido: '',
        Correo_Emprendedor: '',
        Telefono_Empresa: '',
        Direccion_Exacta: ''
    });
    const [isUpdating, setIsUpdating] = useState(false); // Estado para saber si se está actualizando un emprendedor
    const [updateId, setUpdateId] = useState(null); // ID del emprendedor a actualizar

    // Cargar emprendedores al cargar el componente
    useEffect(() => {
        cargarEmprendedores();
    }, []);

    // Función para obtener y cargar los emprendedores desde la API
    const cargarEmprendedores = async () => {
        try {
            const data = await getEmprendedores(); // Obtener todos los emprendedores
            setEmprendedores(data); // Actualizar la lista de emprendedores
        } catch (error) {
            console.error('Error al cargar emprendedores:', error);
        }
    };

    // Función para agregar o actualizar un emprendedor
    const agregarEmprendedor = async () => {
        const { Nombre_Emprendedor, Descripcion, Nombre_Contacto, Producto_Ofrecido, Correo_Emprendedor, Telefono_Empresa, Direccion_Exacta } = formData;
        
        // Verificar que todos los campos estén completos
        if (!Nombre_Emprendedor || !Descripcion || !Nombre_Contacto || !Producto_Ofrecido || !Correo_Emprendedor || !Telefono_Empresa || !Direccion_Exacta) {
            toast.error("Por favor, completa todos los campos.");
            return;
        }

        try {
            if (isUpdating) {
                // Actualizar emprendedor existente
                await updateEmprendedor(updateId, formData);
                toast.success("Emprendedor actualizado exitosamente.");
                setIsUpdating(false);
                setUpdateId(null);
            } else {
                // Agregar un nuevo emprendedor
                const nuevoEmprendedor = await PostEmprendedores(formData);
                setEmprendedores([...emprendedores, nuevoEmprendedor]);
                toast.success("Emprendedor agregado exitosamente.");
            }
            // Reiniciar el formulario
            setFormData({
                Nombre_Emprendedor: '',
                Descripcion: '',
                Nombre_Contacto: '',
                Producto_Ofrecido: '',
                Correo_Emprendedor: '',
                Telefono_Empresa: '',
                Direccion_Exacta: ''
            });
            cargarEmprendedores(); // Recargar la lista de emprendedores
        } catch (error) {
            console.error('Error al agregar/actualizar emprendedor:', error);
            toast.error("Error al agregar/actualizar emprendedor.");
        }
    };

    // Función para eliminar un emprendedor por su ID
    const eliminarEmprendedor = async (id) => {
        try {
            await deleteEmprendedor(id); // Eliminar emprendedor
            setEmprendedores(emprendedores.filter(e => e.id !== id)); // Actualizar la lista
            toast.success("Emprendedor eliminado exitosamente.");
        } catch (error) {
            console.error('Error al eliminar emprendedor:', error);
            toast.error("Error al eliminar emprendedor.");
        }
    };

    // Función para preparar la edición de un emprendedor
    const editarEmprendedor = (emprendedor) => {
        setIsUpdating(true);
        setFormData({
            Nombre_Emprendedor: emprendedor.Nombre_Emprendedor,
            Descripcion: emprendedor.Descripcion,
            Nombre_Contacto: emprendedor.Nombre_Contacto,
            Producto_Ofrecido: emprendedor.Producto_Ofrecido,
            Correo_Emprendedor: emprendedor.Correo_Emprendedor,
            Telefono_Empresa: emprendedor.Telefono_Empresa,
            Direccion_Exacta: emprendedor.Direccion_Exacta,
        });
        setUpdateId(emprendedor.id);
    };

    // Función para manejar los cambios en los campos del formulario
    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); // Actualizar los datos del formulario
    };

    return (
        <div className="emprendedoresContainer">
            <h2 id="h2Titulo">Emprendedores</h2>
            <div className="emprendedoresContainer2">
                <div className="containerEmprendedores">
                    <input
                        type="text"
                        placeholder="Nombre del Emprendedor"
                        name="Nombre_Emprendedor"
                        value={formData.Nombre_Emprendedor}
                        onChange={manejarCambio}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Descripción"
                        name="Descripcion"
                        value={formData.Descripcion}
                        onChange={manejarCambio}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Nombre del Contacto"
                        name="Nombre_Contacto"
                        value={formData.Nombre_Contacto}
                        onChange={manejarCambio}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Producto Ofrecido"
                        name="Producto_Ofrecido"
                        value={formData.Producto_Ofrecido}
                        onChange={manejarCambio}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Correo del Emprendedor"
                        name="Correo_Emprendedor"
                        value={formData.Correo_Emprendedor}
                        onChange={manejarCambio}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Teléfono de la Empresa"
                        name="Telefono_Empresa"
                        value={formData.Telefono_Empresa}
                        onChange={manejarCambio}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Dirección Exacta"
                        name="Direccion_Exacta"
                        value={formData.Direccion_Exacta}
                        onChange={manejarCambio}
                        required
                    />
                    <Button id="btnAgregarEmprendedor" onClick={agregarEmprendedor}>
                        {isUpdating ? 'Actualizar Emprendedor' : 'Agregar Emprendedor'}
                    </Button>
                </div>
                <div id="contenedorEmprendedores">
                    {emprendedores.map((emprendedor) => (
                        <div key={emprendedor.id} className="emprendedor">
                            {`Emprendedor: ${emprendedor.Nombre_Emprendedor} - Producto: ${emprendedor.Producto_Ofrecido}`}
                            <div className="btnContainer">
                                <Button id="btnEmprendedorEdit" onClick={() => editarEmprendedor(emprendedor)}>
                                    Editar
                                </Button>
                                <Button id="btnEmprendedorDelete" onClick={() => eliminarEmprendedor(emprendedor.id)}>
                                    Eliminar
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AgregarEmprendedores;

