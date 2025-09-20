import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const experience = [
  {
    title: 'Mantenimiento y Migración de la plataforma "Póliza de Rentas"',
     description: 'Backend y Frontend en Periodo de Prácticas Profesionales. [cite: 37]',
  },
  {
    title: 'Líder en la creación de una plataforma tipo Classroom',
     description: 'Para el Instituto de Idiomas de la Universidad Tecnológica de la Mixteca (Servicio Social en curso Actualmente). [cite: 38]',
  },
  {
    title: 'Proyectos de Clase',
    list: [
       'Creación de Punto de Venta [cite: 32]',
       'Traductor de Codigo C a Codigo Pascal [cite: 33]',
       'Compilador de una Versión de C [cite: 34]',
       'Creación de una Estación Meteorológica en tiempo real [cite: 35]',
       'Plataforma para Aprender Lenguaje de Señas [cite: 36]',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Experiencia</h2>
        <Row className="justify-content-center">
          {experience.map((item, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  {item.description && <Card.Text>{item.description}</Card.Text>}
                  {item.list && (
                    <ul>
                      {item.list.map((project, i) => (
                        <li key={i}>{project}</li>
                      ))}
                    </ul>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;