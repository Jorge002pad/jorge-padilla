import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Sobre Mí</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="text-center">
              [cite_start]Soy un joven oaxaqueño con 23 años de edad que me apasiona aprender, crear y resolver problemas usando tecnologías como Python, C++, JavaScript, PHP y frameworks modernos. [cite: 5]
            </p>
            <p className="text-center">
              [cite_start]Me destaco por mi comunicación efectiva, trabajo en equipo y actitud proactiva frente a nuevos retos. [cite: 6]
            </p>
            <div className="text-center mt-4">
              <h4 className="mb-3">Pasatiempos</h4>
              <ul className="list-inline">
                [cite_start]<li className="list-inline-item">Música [cite: 21]</li>
                [cite_start]<li className="list-inline-item">Canto [cite: 22]</li>
                [cite_start]<li className="list-inline-item">Dibujo [cite: 23]</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;