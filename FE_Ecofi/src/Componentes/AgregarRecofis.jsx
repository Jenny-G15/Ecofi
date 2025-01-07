import React, { useState, useEffect } from 'react';
import { getRecofis, agregarRecofi, actualizarRecofi, eliminarRecofi } from '../services/recofiServices';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/AgregarRecofi.css'



// Componente principal para el formulario de Recofi
const FormularioRecofi = () => {

    const [recofis, setRecofis] = useState([]); // Lista de recofis
    const [datosFormulario, setDatosFormulario] = useState({
        ID_Direccion: '',
        ID_Material: '',
        Nombre_Recofi: '',
        HorarioApertura: '',
        HorarioCierre: '',
        Latitud: '',
        Longitud: '',
        Direccion_Recofi: '',
    });

    const [modoEdicion, setModoEdicion] = useState(false); // Estado para saber si se está editando un recofi
    const [idRecofiActual, setIdRecofiActual] = useState(null); // ID del recofi actual a editar

    // Cargar recofis al cargar el componente
    useEffect(() => {
        cargarRecofis();
    }, []);

    // Función para obtener y cargar los recofis desde la API
    const cargarRecofis = async () => {
        try {
            const datos = await getRecofis(); // Obtener todos los recofis
            setRecofis(datos); // Actualizar la lista de recofis
        } catch (error) {
            console.error('Error al cargar los recofis tigre:', error);
        }
    };

    // Función para manejar los cambios en los campos del formulario
    const manejarCambio = (e) => {
        setDatosFormulario({
            ...datosFormulario,
            [e.target.name]: e.target.value,
        });
    };

    // Función para manejar el envío del formulario
    const manejarEnvio = async () => {
        try {
            console.log('Datos enviados:', datosFormulario);
            if (modoEdicion) {
                // Actualizar recofi existente
                await actualizarRecofi(idRecofiActual, datosFormulario);
                toast.success('Recofi actualizado exitosamente');
            } else {
                // Agregar un nuevo recofi
                await agregarRecofi(datosFormulario);
                toast.success('Recofi agregado exitosamente');
            }

            // Reiniciar el formulario
            setDatosFormulario({
                ID_Direccion: '',
                ID_Material: '',
                Nombre_Recofi: '',
                HorarioApertura: '',
                HorarioCierre: '',
                Latitud: '',
                Longitud: '',
                Direccion_Recofi: '',
            });
            setModoEdicion(false);
            setIdRecofiActual(null);
            cargarRecofis(); // Recargar la lista de recofis
        } catch (error) {
            toast.error('Error al guardar el recofi');
            console.error('Error al guardar el recofi:', error);
        }
    };

    // Función para preparar la edición de un recofi
    const editarRecofi = (recofi) => {
        setModoEdicion(true);
        setIdRecofiActual(recofi.id);
        setDatosFormulario(recofi);
    };

    // Función para eliminar un recofi por su ID
    const borrarRecofi = async (id) => {
        try {
            await eliminarRecofi(id); // Eliminar recofi
            toast.success('Recofi eliminado exitosamente');
            cargarRecofis(); // Recargar la lista de recofis
        } catch (error) {
            toast.error('Error al eliminar el recofi');
            console.error('Error al eliminar el recofi:', error);
        }
    };

    return (
        <div className="recofi-container">
            <h2>{modoEdicion ? 'Editar Recofi' : 'Agregar Recofi'}</h2>
            <form id='FormRecofi2' onSubmit={(e) => e.preventDefault()}>
                {/* Campo para ingresar el ID de Dirección */}
                <input
                    type="number"
                    name="ID_Direccion"
                    placeholder="ID Dirección"
                    value={datosFormulario.ID_Direccion}
                    onChange={manejarCambio}
                    required
                />
                {/* Campo para ingresar el ID de Material */}
                <input
                    type="number"
                    name="ID_Material"
                    placeholder="ID Material"
                    value={datosFormulario.ID_Material}
                    onChange={manejarCambio}
                    required
                />
                {/* Campo para ingresar el Nombre del Recofi */}
                <input
                    type="text"
                    name="Nombre_Recofi"
                    placeholder="Nombre Recofi"
                    value={datosFormulario.Nombre_Recofi}
                    onChange={manejarCambio}
                    required
                />
                {/* Campo para ingresar el Horario de Apertura */}
                <input
                    type="time"
                    name="HorarioApertura"
                    placeholder="Horario Apertura"
                    value={datosFormulario.HorarioApertura}
                    onChange={manejarCambio}
                    required
                />
                {/* Campo para ingresar el Horario de Cierre */}
                <input
                    type="time"
                    name="HorarioCierre"
                    placeholder="Horario Cierre"
                    value={datosFormulario.HorarioCierre}
                    onChange={manejarCambio}
                    required
                />
                {/* Campo para ingresar la Latitud */}
                <input
                    type="number"
                    step="0.0000001"
                    name="Latitud"
                    placeholder="Latitud"
                    value={datosFormulario.Latitud}
                    onChange={manejarCambio}
                    required
                />
                {/* Campo para ingresar la Longitud */}
                <input
                    type="number"
                    step="0.0000001"
                    name="Longitud"
                    placeholder="Longitud"
                    value={datosFormulario.Longitud}
                    onChange={manejarCambio}
                    required
                />
                {/* Campo para ingresar la Dirección del Recofi */}
                <input
                    type="text"
                    name="Direccion_Recofi"
                    placeholder="Dirección Recofi"
                    value={datosFormulario.Direccion_Recofi}
                    onChange={manejarCambio}
                />
                <button onClick={manejarEnvio}>{modoEdicion ? 'Actualizar' : 'Agregar'}</button>
            </form>

            <div className="recofi-lista">
                {recofis.map((recofi) => (
                    <div key={recofi.id} className="recofi-item">
                        {/* Mostrar el nombre del recofi */}
                        <p>{recofi.Nombre_Recofi}</p>
                        <button onClick={() => editarRecofi(recofi)}>Editar</button>
                        <button onClick={() => borrarRecofi(recofi.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormularioRecofi;
