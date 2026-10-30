import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./NavbarC.css";

const NavbarC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`restaurant-navbar ${
        !isHomePage ? "navbar-standalone" : ""
      } ${scrolled ? "scrolled" : ""}`}
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
          </Nav>

          <Button as={Link} to="/contacto" className="reserve-button">
            Reservar
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
