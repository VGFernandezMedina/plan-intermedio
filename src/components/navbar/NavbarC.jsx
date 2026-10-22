import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarC.css";

const NavbarC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiamos el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`restaurant-navbar ${scrolled ? "scrolled" : ""}`}
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          <img
            src="/logo.webp"
            alt="Logo del Viejo Sauce"
            className="brand-logo"
          />
          <span>El Viejo Sauce</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navbar"
          aria-label="Abrir menú de navegación"
        />

        <Navbar.Collapse id="main-navbar">
          <Nav className="navbar-links">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>

            <Nav.Link as={Link} to="/menu">
              Menú
            </Nav.Link>

            <Nav.Link as={Link} to="/nosotros">
              Nosotros
            </Nav.Link>

            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>

          <Button as={Link} to="/reservar" className="reserve-button">
            Reservar
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
