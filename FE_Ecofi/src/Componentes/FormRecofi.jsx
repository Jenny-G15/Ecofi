import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import emailjs from 'emailjs-com';
import { getFormulario, agregarFormulario } from '../services/formularioServices';
import { getRecofis } from '../services/recofiServices';
import { getMateriales } from '../services/materialServices';
import { buscarPorCedula } from '../services/userServices';
import { actualizarBicolones } from '../services/userServices';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Formularios.css'







const FormularioMateriales = () => {
  const [formularios, setFormularios] = useState([]);
  const [direcciones, setDirecciones] = useState([]);
  const [materiales, setMateriales] = useState([]);
  const [datosFormulario, setDatosFormulario] = useState({
    ID_Recofi: '',
    ID_Material: '',
    ID_Usuario: '',
    Bicolnes_Obtenidos: '',
    Fecha_Formulario: '',
  });


  const [cedula, setCedula] = useState('');
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    cargarFormularios();
    cargarDirecciones();
    cargarMateriales();
  }, []);

  const cargarFormularios = async () => {
    try {
      const datos = await getFormulario();
      setFormularios(datos);
    } catch (error) {
      console.error('Error al cargar formularios:', error);
    }
  };


  const cargarDirecciones = async () => {
    try {
      const datos = await getRecofis();
      setDirecciones(datos);
    } catch (error) {
      console.error('Error al cargar direcciones:', error);
    }
  };


  const cargarMateriales = async () => {
    try {
      const datos = await getMateriales();
      setMateriales(datos);
    } catch (error) {
      console.error('Error al cargar materiales:', error);
    }
  };

  const manejarCambio = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value || '',
    });
  };


  const buscarUsuario = async () => {
    if (!cedula) {
      setError('Por favor, ingrese una cédula');
      return;
    }

    try {
      const usuarioEncontrado = await buscarPorCedula(cedula);
      if (usuarioEncontrado) {
        setUsuario(usuarioEncontrado);
        setDatosFormulario({
          ...datosFormulario,
          ID_Usuario: usuarioEncontrado.id,
        });
        setError(null);
      } else {
        setUsuario(null);
        setError('Usuario no encontrado');
      }
    } catch (error) {
      setError('Error al buscar el usuario');
      console.error('Error al buscar el usuario:', error);
    }
  };



  const manejarEnvio = async () => {
    if (!datosFormulario.ID_Usuario) {
      toast.error('Debe seleccionar un usuario');
      return;
    }

    try {
      const nuevosBicolones =
        parseInt(usuario.Bicolones || 0) +
        parseInt(datosFormulario.Bicolnes_Obtenidos || 0);

      await actualizarBicolones(usuario.id, nuevosBicolones);

      const datosBackForm = { ...datosFormulario, Bicolnes_Obtenidos: parseInt(datosFormulario.Bicolnes_Obtenidos || 0) };
      await agregarFormulario(datosBackForm);

      toast.success('Formulario agregado exitosamente');
      setDatosFormulario({
        ID_Recofi: '',
        ID_Material: '',
        ID_Usuario: '',
        Bicolnes_Obtenidos: '',
        Fecha_Formulario: '',
      });
      cargarFormularios();

      generarPDF();
      ComprobanteEmail();
    } catch (error) {
      toast.error('Error al guardar el formulario');
      console.error('Error al guardar el formulario:', error);
    }
  };

  const generarPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text('Comprobante de Canje', 20, 20);
    doc.text(`Nombre del Usuario: ${usuario.Nombre_Usuario} ${usuario.Apellido_Usuario}`, 20, 30);
    doc.text(`RECOFI: ${materiales.find((m) => m.id === datosFormulario.ID_Material)?.Tipo_Material || 'N/A'}`, 20, 40);
    doc.text(`Dirección: ${direcciones.find((d) => d.id === datosFormulario.ID_Recofi)?.Nombre_Recofi || 'N/A'}`, 20, 50);
    doc.text(`Fecha: ${datosFormulario.Fecha_Formulario}`, 20, 60);
    doc.text(`Bicolones Obtenidos: ${datosFormulario.Bicolnes_Obtenidos}`, 20, 70);

    doc.save('Comprobante.pdf');
  };





  const ComprobanteEmail = () => {
    if (!usuario) {
      alert('Debe seleccionar un usuario para enviar el PDF.');
      return;
    }

    //REVISAR
  
    const materialSeleccionado = materiales.find((m) => String(m.id) === String(datosFormulario.ID_Material));
    const direccionSeleccionada = direcciones.find((d) => String(d.id) === String(datosFormulario.ID_Recofi));
  
    console.log('Material seleccionado:', materialSeleccionado);
    console.log('Dirección seleccionada:', direccionSeleccionada);
  
    const emailParams = {
      to_name: `${usuario.Nombre_Usuario || 'N/A'} ${usuario.Apellido_Usuario || ''}`,
      material: materialSeleccionado ? materialSeleccionado.Tipo_Material : 'N/A',
      direccion: direccionSeleccionada ? direccionSeleccionada.Nombre_Recofi : 'N/A',
      fecha: datosFormulario.Fecha_Formulario || 'Fecha no disponible',
      bicolones: datosFormulario.Bicolnes_Obtenidos || '0',
      to_email: usuario.Correo_Usuario || 'No email',
    };
  
    console.log('Email Params:', emailParams);
  
    emailjs
      .send('service_56xi5wh', 'template_99rzmgs', emailParams, 'rV7wVdf0tWzRA66hT')
      .then(() => {
        toast.success('Comprobante enviado con éxito.');
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        toast.error('Hubo un problema al enviar el correo.');
      });
  };
  



  return (
    <div className="formulario-container">
      <h2>Agregar Formulario</h2>

      <div className="buscador-cedula">
        <input
          type="text"
          name="cedula"
          placeholder="Ingrese la cédula"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
        />
        <button onClick={buscarUsuario}>Buscar Usuario</button>
      </div>

      {usuario && (
        <div className="usuario-info">
          <h4>Información del Usuario:</h4>
          <p><strong>Nombre:</strong> {usuario.Nombre_Usuario} {usuario.Apellido_Usuario}</p>
          <p><strong>Cédula:</strong> {usuario.Cedula}</p>
          <p><strong>Bicolones actuales:</strong> {usuario.Bicolones}</p>
        </div>
      )}

      {error && <div className="error">{error}</div>}

      <form onSubmit={(e) => e.preventDefault()}>
        <select
          name="ID_Recofi"
          value={datosFormulario.ID_Recofi}
          onChange={manejarCambio}
          required
        >
          <option value="">Seleccione una Dirección</option>
          {direcciones.map((direccion) => (
            <option key={direccion.id} value={direccion.id}>
              {direccion.Nombre_Recofi}
            </option>
          ))}
        </select>

        <select
          name="ID_Material"
          value={datosFormulario.ID_Material}
          onChange={manejarCambio}
          required
        >
          <option value="">Seleccione un Material</option>
          {materiales.map((material) => (
            <option key={material.id} value={material.id}>
              {material.Tipo_Material}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="Bicolnes_Obtenidos"
          placeholder="Nuevos Bicolones"
          value={datosFormulario.Bicolnes_Obtenidos || ''}
          onChange={manejarCambio}
          required
        />

        <input
          type="date"
          name="Fecha_Formulario"
          placeholder="Fecha"
          value={datosFormulario.Fecha_Formulario || ''}
          onChange={manejarCambio}
          required
        />

        <button onClick={manejarEnvio}>Agregar y Enviar Comprobante</button>
      </form>
    </div>
  );
};

export default FormularioMateriales;



