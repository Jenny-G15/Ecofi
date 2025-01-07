import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import emailjs from 'emailjs-com';
import { agregarFormulario } from '../services/formularioServices';
import { getRecofis } from '../services/recofiServices';
import { getMateriales } from '../services/materialServices';
import { buscarPorCedula, actualizarBicolones } from '../services/userServices';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Formularios.css';




const FormularioMateriales = () => {
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

  // Carga las direcciones y materiales al iniciar la página
  useEffect(() => {
    cargarDirecciones();
    cargarMateriales();
  }, []);

  // Carga las direcciones disponibles desde el servidor
  const cargarDirecciones = async () => {
    try {
      const datos = await getRecofis();
      setDirecciones(datos);
    } catch (error) {
      console.error('Error al cargar direcciones:', error);
    }
  };

  // Carga los materiales disponibles desde el servidor
  const cargarMateriales = async () => {
    try {
      const datos = await getMateriales();
      setMateriales(datos);
    } catch (error) {
      console.error('Error al cargar materiales:', error);
    }
  };

  // Actualiza los datos del formulario cuando el usuario cambia algo
  const manejarCambio = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value || '',
    });
  };

  // Busca un usuario en base a la cédula ingresada
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

  // Envía los datos del formulario y realiza acciones adicionales
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
      await agregarFormulario({
        ...datosFormulario,
        Bicolnes_Obtenidos: parseInt(datosFormulario.Bicolnes_Obtenidos || 0),
      });

      toast.success('Formulario agregado exitosamente');
      setDatosFormulario({
        ID_Recofi: '',
        ID_Material: '',
        ID_Usuario: '',
        Bicolnes_Obtenidos: '',
        Fecha_Formulario: '',
      });

      generarPDF();
      ComprobanteEmail();
    } catch (error) {
      toast.error('Error al guardar el formulario');
      console.error('Error al guardar el formulario:', error);
    }
  };

  // Genera un comprobante en formato PDF
  const generarPDF = () => {
    const doc = new jsPDF();
    doc.text('Comprobante de Canje', 20, 20);
    doc.save('Comprobante.pdf');
  };

  // Envía un correo con el comprobante generado
  const ComprobanteEmail = () => {
    if (!usuario) {
      alert('Debe seleccionar un usuario para enviar el PDF.');
      return;
    }

    emailjs.send('service_id', 'template_id', {
      to_name: `${usuario.Nombre_Usuario} ${usuario.Apellido_Usuario}`,
      to_email: usuario.Correo_Usuario,
    });
  };

  return (
    <div>
      {/* Formulario visual */}
    </div>
  );
};

export default FormularioMateriales;



