import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="#home">JORGE PADILLA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">Sobre Mí</Nav.Link>
            <Nav.Link href="#skills">Habilidades</Nav.Link>
            <Nav.Link href="#experience">Experiencia</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <div className="ms-3">
              <ThemeSwitcher />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;