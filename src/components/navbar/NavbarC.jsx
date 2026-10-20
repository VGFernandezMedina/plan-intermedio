import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarC.css";

const NavbarC = () => {
  return (
    <Navbar expand="lg" className="restaurant-navbar" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
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
