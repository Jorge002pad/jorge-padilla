import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <h2 className="text-center mb-4">Sobre Mí</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="text-center">
              Soy un joven oaxaqueño con 23 años de edad que me apasiona aprender, crear y resolver problemas usando tecnologías como Python, C++, JavaScript, PHP y frameworks modernos.
            </p>
            <p className="text-center">
              Me destaco por mi comunicación efectiva, trabajo en equipo y actitud proactiva frente a nuevos retos.
            </p>
            <div className="text-center mt-4">
              <h4 className="mb-3">Pasatiempos</h4>
              <ul className="list-inline">
                <li className="list-inline-item">Música</li>
                <li className="list-inline-item">Canto</li>
                <li className="list-inline-item">Dibujo</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;