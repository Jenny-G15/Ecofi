import React, { useState, useEffect } from 'react';
import { getEmprendedores, PostEmprendedores, deleteEmprendedor } from '../services/emprendedorServices'; // Asegúrate de tener estos servicios en el archivo adecuado
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/AgregarEmprendedores.css'
import { Button } from 'react-bootstrap';









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


    // Cargar emprendedores al cargar el componente
    useEffect(() => {
        cargarEmprendedores();
    }, []);

    const cargarEmprendedores = async () => {
        try {
            const data = await getEmprendedores(); // Llama al servicio para obtener emprendedores
            setEmprendedores(data);
        } catch (error) {
            console.error('Error al cargar emprendedores:', error);
        }
    };

    const agregarEmprendedor = async () => {
        const {
            Nombre_Emprendedor,
            Descripcion,
            Nombre_Contacto,
            Producto_Ofrecido,
            Correo_Emprendedor,
            Telefono_Empresa,
            Direccion_Exacta
        } = formData;

        // Verificar que todos los campos estén llenos
        if (
            !Nombre_Emprendedor ||
            !Descripcion ||
            !Nombre_Contacto ||
            !Producto_Ofrecido ||
            !Correo_Emprendedor ||
            !Telefono_Empresa ||
            !Direccion_Exacta
        ) {
            toast.error("Por favor, completa todos los campos.");
            return;
        }

        try {
            // Llama al servicio para agregar un nuevo emprendedor
            const nuevoEmprendedor = await PostEmprendedores(
                Nombre_Emprendedor,
                Descripcion,
                Nombre_Contacto,
                Producto_Ofrecido,
                Correo_Emprendedor,
                Telefono_Empresa,
                Direccion_Exacta
            );

            setEmprendedores([...emprendedores, nuevoEmprendedor]); // Agrega el nuevo emprendedor a la lista
            setFormData({ // Reinicia los campos del formulario
                Nombre_Emprendedor: '',
                Descripcion: '',
                Nombre_Contacto: '',
                Producto_Ofrecido: '',
                Correo_Emprendedor: '',
                Telefono_Empresa: '',
                Direccion_Exacta: ''
            });

            toast.success("Emprendedor agregado exitosamente.");
        } catch (error) {
            console.error('Error al agregar emprendedor:', error);
            toast.error("Error al agregar emprendedor.");
        }
    };

    const eliminarEmprendedor = async (id) => {
        try {
            await deleteEmprendedor(id); // Llama al servicio para eliminar el emprendedor
            setEmprendedores(emprendedores.filter(e => e.id !== id)); // Actualiza la lista filtrando al eliminado
            toast.success("Emprendedor eliminado exitosamente.");
        } catch (error) {
            console.error('Error al eliminar emprendedor:', error);
            toast.error("Error al eliminar emprendedor.");
        }
    };

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); // Actualiza el estado del formulario dinámicamente
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
                        Agregar Emprendedor
                    </Button>
                </div>
                <div id="contenedorEmprendedores">
                    {emprendedores.map((emprendedor) => (
                        <div key={emprendedor.id} className="emprendedor">
                            {`Emprendedor: ${emprendedor.Nombre_Emprendedor} - Producto: ${emprendedor.Producto_Ofrecido}`}
                            <div className="btnContainer">
                                <Button
                                    id="btnEmprendedorDelete"
                                    onClick={() => eliminarEmprendedor(emprendedor.id)}
                                >
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
