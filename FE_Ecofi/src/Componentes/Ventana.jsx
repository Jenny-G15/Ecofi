import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import '../styles/Perfil_Usuario.css';

const Ventana = ({ show, Close, results }) => {
    return (
        <Modal show={show} onHide={Close} centered>
            <Modal.Header closeButton>
                <Modal.Title>Resultados de Búsqueda</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {results.length > 0 ? (
                    results.map((producto) => (
                        <Card key={producto.id} style={{ marginBottom: '10px' }}>
                            {/* Verificamos si la imagen existe, y si no, mostramos una imagen predeterminada */}
                            <Card.Img 
                                variant="top" 
                                src={producto.Imagen || '/path/to/default-image.jpg'} 
                                alt={producto.Imagen}
                                style={{ height: '200px', objectFit: 'cover' }} // Controlamos el tamaño y ajuste de la imagen
                            />
                            <Card.Body>
                                <Card.Title>{producto.Nombre_Producto}</Card.Title>
                                <Card.Text>{producto.Descripcion_Producto}</Card.Text>
                                <Card.Text>{producto.Stock}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <p>No se encontraron resultados.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={Close}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Ventana;
