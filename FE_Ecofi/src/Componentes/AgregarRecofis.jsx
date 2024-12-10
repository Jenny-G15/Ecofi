import React, { useState, useEffect } from 'react';
import { getRecofis, agregarRecofi, actualizarRecofi, eliminarRecofi } from '../services/recofiServices';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/AgregarRecofi.css'








const FormularioRecofi = () => {

    const [recofis, setRecofis] = useState([]);
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

    const [modoEdicion, setModoEdicion] = useState(false);
    const [idRecofiActual, setIdRecofiActual] = useState(null);

    useEffect(() => {
        cargarRecofis();
    }, []);




    const cargarRecofis = async () => {
        try {
            const datos = await getRecofis();
            setRecofis(datos);
        } catch (error) {
            console.error('Error al cargar los recofis tigre:', error);
        }
    };



    const manejarCambio = (e) => {
        setDatosFormulario({
            ...datosFormulario,
            [e.target.name]: e.target.value,
        });
    };

    const manejarEnvio = async () => {
        try {
            console.log('Datos enviados:', datosFormulario);
            if (modoEdicion) {
                await actualizarRecofi(idRecofiActual, datosFormulario);
                toast.success('Recofi actualizado exitosamente');
            } else {
                await agregarRecofi(datosFormulario);
                toast.success('Recofi agregado exitosamente');
            }

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
            cargarRecofis();
        } catch (error) {
            toast.error('Error al guardar el recofi');
            console.error('Error al guardar el recofi:', error);
        }
    };

    const editarRecofi = (recofi) => {
        setModoEdicion(true);
        setIdRecofiActual(recofi.id);
        setDatosFormulario(recofi);
    };

    const borrarRecofi = async (id) => {
        try {
            await eliminarRecofi(id);
            toast.success('Recofi eliminado exitosamente');
            cargarRecofis();
        } catch (error) {
            toast.error('Error al eliminar el recofi');
            console.error('Error al eliminar el recofi:', error);
        }
    };

    return (
        <div className="recofi-container">
            <h2>{modoEdicion ? 'Editar Recofi' : 'Agregar Recofi'}</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="number"
                    name="ID_Direccion"
                    placeholder="ID Dirección"
                    value={datosFormulario.ID_Direccion}
                    onChange={manejarCambio}
                    required
                />
                <input
                    type="number"
                    name="ID_Material"
                    placeholder="ID Material"
                    value={datosFormulario.ID_Material}
                    onChange={manejarCambio}
                    required
                />
                <input
                    type="text"
                    name="Nombre_Recofi"
                    placeholder="Nombre Recofi"
                    value={datosFormulario.Nombre_Recofi}
                    onChange={manejarCambio}
                    required
                />
                <input
                    type="time"
                    name="HorarioApertura"
                    placeholder="Horario Apertura"
                    value={datosFormulario.HorarioApertura}
                    onChange={manejarCambio}
                    required
                />
                <input
                    type="time"
                    name="HorarioCierre"
                    placeholder="Horario Cierre"
                    value={datosFormulario.HorarioCierre}
                    onChange={manejarCambio}
                    required
                />
                <input
                    type="number"
                    step="0.0000001"
                    name="Latitud"
                    placeholder="Latitud"
                    value={datosFormulario.Latitud}
                    onChange={manejarCambio}
                    required
                />
                <input
                    type="number"
                    step="0.0000001"
                    name="Longitud"
                    placeholder="Longitud"
                    value={datosFormulario.Longitud}
                    onChange={manejarCambio}
                    required
                />
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
