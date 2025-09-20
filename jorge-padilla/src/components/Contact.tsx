import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Contacto</h2>
        <Row className="justify-content-center text-center">
          <Col md={3}>
            <a href="https://www.linkedin.com/in/jorgepad-dev/" target="_blank" rel="noopener noreferrer" className="d-block mb-3">
              <FaLinkedin size={40} />
              [cite_start]<p className="mt-2">LinkedIn [cite: 14]</p>
            </a>
          </Col>
          <Col md={3}>
            <a href="https://github.com/Jorge002pad" target="_blank" rel="noopener noreferrer" className="d-block mb-3">
              <FaGithub size={40} />
              [cite_start]<p className="mt-2">GitHub [cite: 15]</p>
            </a>
          </Col>
          <Col md={3}>
            <a href="mailto:Jorgepad002@gmail.com" className="d-block mb-3">
              <FaEnvelope size={40} />
              [cite_start]<p className="mt-2">Correo [cite: 13]</p>
            </a>
          </Col>
          <Col md={3}>
            <a href="tel:+529532398117" className="d-block mb-3">
              <FaPhone size={40} />
              [cite_start]<p className="mt-2">Teléfono [cite: 12]</p>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;