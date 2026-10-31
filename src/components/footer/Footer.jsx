import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaRegClock,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const numero = "549XXXXXXXXXX";
  const mensaje =
    "¡Hola! Quisiera consultar disponibilidad para reservar una mesa en El Viejo Sauce.";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <Container fluid className="footer">
      <Row className="footer-info">
        <Col sm="12" md="4" lg="6" className="footer-col-logo">
          <Link to="/" aria-label="Ir al inicio">
            <img
              src="/logo.webp"
              alt="Logo de El Viejo Sauce"
              className="footer-logo-img"
            />
          </Link>
          <p>
            Cocina artesanal, cafés de especialidad y momentos al aire libre en
            el corazón de Tucumán. Tu esquina de siempre bajo la sombra del
            sauce.
          </p>
        </Col>

        <Col sm="12" md="4" lg="3" className="footer-col-links">
          <h5>Navegación</h5>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/menu">Menú</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
          </ul>
        </Col>

        <Col sm="12" md="4" lg="3" className="footer-col-contact">
          <h5>Visitanos</h5>
          <p>
            <FiMapPin className="footer-icon-contact" /> Esquina San Martín y
            Junín
          </p>
          <p>
            <FaRegClock className="footer-icon-contact" /> Mar a Dom: 08:00 a
            00:00 hs.
          </p>
          <p>
            <MdOutlineLocalPhone className="footer-icon-contact" /> +54 9
            XXXXXXXXXX
          </p>
        </Col>
      </Row>

      <Row className="w-100 footer-bottom">
        <Col sm="12" md="6" lg="6" className="py-3 text-center text-md-start">
          <p className="m-0">
            &copy; {currentYear} El Viejo Sauce. Todos los derechos reservados.
          </p>
        </Col>
        <Col sm="12" md="6" lg="6" className="py-3 col-icons">
          <div className="footer-icons">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="footer-icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="footer-icon" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="footer-icon" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <AiOutlineYoutube className="footer-icon" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
