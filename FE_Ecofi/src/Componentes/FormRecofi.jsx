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

     // Estados para manejar datos del formulario, listas de opciones y errores
  const [formularios, setFormularios] = useState([]);
  const [direcciones, setDirecciones] = useState([]);
  const [materiales, setMateriales] = useState([]);
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


  const [cedula, setCedula] = useState('');
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);

    // Efecto para cargar datos iniciales
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


   // Busca un usuario por su cédula
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


// Maneja el envío del formulario
  const manejarEnvio = async () => {
    if (!datosFormulario.ID_Usuario) {
      toast.error('Debe seleccionar un usuario');
      return;
    }

    try {
      const nuevosBicolones =
      // Calcula los nuevos bicolones y actualiza al usuario
        parseInt(usuario.Bicolones || 0) +
        parseInt(datosFormulario.Bicolnes_Obtenidos || 0);

      await actualizarBicolones(usuario.id, nuevosBicolones);

      const datosBackForm = { ...datosFormulario, Bicolnes_Obtenidos: parseInt(datosFormulario.Bicolnes_Obtenidos || 0) };

        // Agrega el formulario al backend
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




  // Genera un comprobante PDF
  const generarPDF = () => {
    const doc = new jsPDF();
  
    // Establecer los márgenes
    const margin = 20;
  
    // Título "Recofi" 
    doc.setFontSize(32);
    doc.setTextColor(0, 128, 0); // Color verde (RGB)
    doc.text('Recofi', doc.internal.pageSize.width / 2, margin, { align: 'center' });
  
    // Título "Comprobante de Canje" debajo de "Recofi",
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text('Comprobante de Canje', doc.internal.pageSize.width / 2, margin + 8 + 12, { align: 'center' });
  
    // Linea Separadora"
    doc.setLineWidth(0.5);
    doc.line(margin, margin + 40, doc.internal.pageSize.width - margin, margin + 40);
  
    // Ajuste de espacio entre el título y la información
    const infoStartY = margin + 50; 
  
    // Volver a usar un tamaño de fuente más pequeño para el contenido
    doc.setFontSize(12);
  
    // Información del comprobante
    doc.text(`Nombre del Usuario: ${usuario.Nombre_Usuario}${usuario.Apellido_Usuario}`, margin, infoStartY);
    doc.text(`RECOFI: ${materiales.find((m) => m.id === datosFormulario.ID_Material)?.Tipo_Material || 'N/A'}`, margin, infoStartY + 10);
    doc.text(`Dirección: ${direcciones.find((d) => d.id === datosFormulario.ID_Recofi)?.Nombre_Recofi || 'N/A'}`, margin, infoStartY + 20);
    doc.text(`Fecha: ${datosFormulario.Fecha_Formulario}`, margin, infoStartY + 30);
    doc.text(`Bicolones Obtenidos: ${datosFormulario.Bicolnes_Obtenidos}`, margin, infoStartY + 40);
  
    // Separador debajo de la información
    doc.line(margin, infoStartY + 50, doc.internal.pageSize.width - margin, infoStartY + 50);
  
    // Pie de página opcional
    doc.setFontSize(10);
    doc.text('Este es un comprobante de intercambio de materiales por bicolones.', margin, doc.internal.pageSize.height - 20);
  
    // Guardar el PDF
    doc.save('Comprobante.pdf');
  };
  





  // Envía el comprobante por correo
  const ComprobanteEmail = () => {
    if (!usuario) {
      alert('Debe seleccionar un usuario para enviar el PDF.');
      return;
    }

  
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
      <h2 className="formulario-titulo">RECOFI</h2>
  
      {/* Sección de búsqueda */}
      <div className="buscador-cedula d-flex justify-content-center align-items-center mb-4">
        <input
          type="text"
          name="cedula"
          className="form-control w-50 me-2"
          placeholder="Ingrese la cédula"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
        />
        <button id='BuscarForm' className="btn btn-primary" onClick={buscarUsuario}>
          Buscar Usuario
        </button>
      </div>
  
      {/* Mensaje de error */}
      {error && <div className="alert alert-danger text-center">{error}</div>}
  
      {/* Información del usuario */}
      {usuario && (
        <div id='cardFormulario' className="card usuario-card mb-4">
          <div className="card-body text-center">
            <h4 className="card-title mb-3">
              <strong>Información del Usuario</strong>
            </h4>
            <p className="card-text">
              <strong>Nombre:</strong> {usuario.Nombre_Usuario} {usuario.Apellido_Usuario}
            </p>
            <p className="card-text">
              <strong>Cédula:</strong> {usuario.Cedula}
            </p>
            <p className="card-text">
              <strong>Bicolones actuales:</strong> {usuario.Bicolones}
            </p>
          </div>
        </div>
      )}
  
      {/* Formulario */}
      <form onSubmit={(e) => e.preventDefault()} className="p-4 formulario-box rounded">
        <div className="mb-3">
          <label htmlFor="ID_Recofi" className="form-label">
            Dirección RECOFI
          </label>
          <select
            name="ID_Recofi"
            className="form-select"
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
        </div>
  
        <div className="mb-3">
          <label htmlFor="ID_Material" className="form-label">
            Material
          </label>
          <select
            name="ID_Material"
            className="form-select"
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
        </div>
  
        <div className="mb-3">
          <label htmlFor="Bicolnes_Obtenidos" className="form-label">
            Nuevos Bicolones
          </label>
                <input
                    type="number"
                    step="0.0000001"
                    name="Latitud"
                    placeholder="Latitud"
                    value={datosFormulario.Latitud}
                    onChange={manejarCambio}
                    required
                />
        </div>
  
        <div className="mb-4">
          <label htmlFor="Fecha_Formulario" className="form-label">
            Fecha
          </label>
                <input
            type="date"
            name="Fecha_Formulario"
            className="form-control"
            value={datosFormulario.Fecha_Formulario || ''}
            onChange={manejarCambio}
            required
          />
        </div>
  
        <div className="text-center">
          <button className="btn btn-success px-4" onClick={manejarEnvio}>
            Agregar y Enviar Comprobante
          </button>
        </div>
      </form>
    </div>
  );
  
};

export default FormularioMateriales;