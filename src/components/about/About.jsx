import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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

  return (
    <Container fluid className="about">
      <div
        className="about-bg-parallax"
        style={{ transform: `translateY(${offsetY}px)` }}
      ></div>

      <div className="about-overlay"></div>

      <div className="about-content">
        <p className="about-subtitle">Nuestra Historia</p>

        <h2 className="about-title">El punto de encuentro de todos los días</h2>

        <p className="about-description">
          Comenzamos como un pequeño sueño de barrio, inspirados en las charlas
          compartidas bajo la sombra del viejo sauce. Hoy combinamos
          ingredientes locales de estación, cocina casera elaborada con
          paciencia y una propuesta de café pensada para sentirse en casa.
        </p>

        <div className="about-buttons">
          <Button as={Link} to="/nosotros" className="btn-about">
            Ver más
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default About;
