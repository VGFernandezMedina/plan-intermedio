import { Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <Container fluid className="menu-testimonials-section py-5 px-3 px-md-5">
      <div className="text-center mb-5">
        <span
          className="about-subtitle-page"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          Lo que dicen de nosotros
        </span>
        <h2 className="faq-main-title" data-aos="fade-up" data-aos-delay="100">
          Experiencias en el Sauce
        </h2>
      </div>

      <Row
        className="g-4 justify-content-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Col xs={12} md={6} lg={4}>
          <div className="testimonial-card">
            <div className="testimonial-stars mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
            <p className="testimonial-comment">
              "Leer la carta y sentarse bajo la sombra del sauce es de las
              mejores experiencias en Tucumán. Las empanadas son un 10."
            </p>
            <div className="testimonial-author">
              <strong>Mariana G.</strong>
              <span>Cliente frecuente</span>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <div className="testimonial-card">
            <div className="testimonial-stars mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
            <p className="testimonial-comment">
              "El café de especialidad y la pastelería casera son increíbles. Un
              lugar que cuida cada detalle al máximo."
            </p>
            <div className="testimonial-author">
              <strong>Lucas R.</strong>
              <span>Amante del café</span>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <div className="testimonial-card">
            <div className="testimonial-stars mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
            <p className="testimonial-comment">
              "Ideal para ir en familia un domingo al mediodía. Las pastas
              caseras tienen ese sabor a hogar inigualable."
            </p>
            <div className="testimonial-author">
              <strong>Sofía M.</strong>
              <span>Cena familiar</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
