import "./Home.css";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid className="home">
      <div className="home-gradient"></div>

      <div className="home-content">
        <p className="home-subtitle" data-aos="fade-up" data-aos-delay="200">
          Café, Bar &amp; Cocina de Barrio
        </p>

        <h1 data-aos="fade-up" data-aos-delay="300">
          El Viejo Sauce
        </h1>

        <p className="home-description" data-aos="fade-up" data-aos-delay="400">
          Sabores de siempre, encuentros que se disfrutan y momentos para
          compartir.
        </p>

        <div className="home-buttons" data-aos="fade-up" data-aos-delay="500">
          <Button className="btn-menu" href="/menu">
            Ver el menú
          </Button>

          <Button className="btn-reservar" href="/#reservas">
            Reservar una mesa
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
