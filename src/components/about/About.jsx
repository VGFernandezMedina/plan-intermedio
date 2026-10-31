import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import "./About.css";

const About = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const numero = "549XXXXXXXXXX";
  const mensaje =
    "¡Hola! Quisiera consultar disponibilidad para reservar una mesa en El Viejo Sauce.";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <Container fluid className="about">
      <div
        className="about-bg-parallax"
        style={{ transform: `translateY(${offsetY}px)` }}
      ></div>

      <div className="about-overlay"></div>

      <div className="about-content">
        <p className="about-subtitle" data-aos="fade-up" data-aos-delay="100">
          Nuestra Historia
        </p>

        <h2 className="about-title" data-aos="fade-up" data-aos-delay="200">
          El punto de encuentro de todos los días
        </h2>

        <p
          className="about-description"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Comenzamos como un pequeño sueño de barrio, inspirados en las charlas
          compartidas bajo la sombra del viejo sauce. Hoy combinamos
          ingredientes locales de estación, cocina casera elaborada con
          paciencia y una propuesta de café pensada para sentirse en casa.
        </p>

        <div className="about-actions" data-aos="fade-up" data-aos-delay="400">
          <Button as={Link} to="/nosotros" className="btn-about">
            Ver más
          </Button>

          <div className="about-social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon-link"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon-link"
            >
              <FaInstagram />
            </a>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-icon-link"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="social-icon-link"
            >
              <AiOutlineYoutube />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
