import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer-section text-center py-5">
      <Container>
        <h2 className="mb-4">Contacto</h2>
        <Row className="justify-content-center text-center">
          <Col md={3}>
            <a href="https://www.linkedin.com/in/jorgepad-dev/" target="_blank" rel="noopener noreferrer" className="d-block mb-3">
              <FaLinkedin size={40} />
              <p className="mt-2">LinkedIn</p>
            </a>
          </Col>
          <Col md={3}>
            <a href="https://github.com/Jorge002pad" target="_blank" rel="noopener noreferrer" className="d-block mb-3">
              <FaGithub size={40} />
              <p className="mt-2">GitHub</p>
            </a>
          </Col>
          <Col md={3}>
            <a href="mailto:Jorgepad002@gmail.com" className="d-block mb-3">
              <FaEnvelope size={40} />
              <p className="mt-2">Correo</p>
            </a>
          </Col>
          <Col md={3}>
            <a href="tel:+529532398117" className="d-block mb-3">
              <FaPhone size={40} />
              <p className="mt-2">Teléfono</p>
            </a>
          </Col>
        </Row>
        <div className="mt-5 pt-3 border-top">
            <p className="mb-0">
                2025
            </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;