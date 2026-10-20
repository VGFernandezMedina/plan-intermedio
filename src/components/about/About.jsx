import { Button, Container } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container fluid className="about">
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
          <Button className="btn-about" href="/about">
            Ver más
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default About;
