import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import ReservationForm from "../reservationform/ReservationForm";

const Contact = () => {
  return (
    <Container fluid className="contact p-0">
      <Row className="g-0 min-vh-100">
        <Col sm="12" md="6" lg="6" className="contact-left-col">
          <div className="contact-content-wrapper">
            <span className="contact-subtitle">Reservas & Contacto</span>
            <h2>Vení a conocernos</h2>
            <p className="contact-description">
              Hacé tu reserva con anticipación o consultanos lo que necesites.
              Te esperamos en nuestra esquina para disfrutar de un buen momento.
            </p>

            <ReservationForm />

            <div className="contact-info mt-4">
              <div className="info-item">
                <strong>📍 Dirección:</strong> Esquina San Martín y Junín,
                Tucumán
              </div>
              <div className="info-item">
                <strong>🕒 Horarios:</strong> Martes a Domingo de 08:00 a 00:00
                hs.
              </div>
              <div className="info-item">
                <strong>📞 Teléfono:</strong> +54 9 381 123-4567
              </div>
            </div>
          </div>
        </Col>

        <Col sm="12" md="6" lg="6" className="contact-map p-0 m-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102370854497!2d-65.209389!3d-26.824146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjYuMKKwNDknMjcuOSJTIDY1wrAxMicyMy44Ilc!5e0!3m2!1ses!2sar!4v1650000000000!5m2!1ses!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de El Sauce"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
