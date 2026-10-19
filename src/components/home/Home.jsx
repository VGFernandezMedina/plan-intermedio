import "./Home.css";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid className="home">
      <div className="home-content">
        <p className="home-subtitle">Café, Bar &amp; Cocina de Barrio</p>

        <h1>El Viejo Sauce</h1>

        <p className="home-description">
          Sabores de siempre, encuentros que se disfrutan y momentos para
          compartir.
        </p>

        <div className="home-buttons">
          <Button className="btn-menu" href="/menu">
            Ver el menú
          </Button>

          <Button className="btn-reservar" href="/reservas">
            Reservar una mesa
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
