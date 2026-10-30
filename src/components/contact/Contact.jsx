import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import ReservationForm from "../reservationform/ReservationForm";
import { FiMapPin } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";

const Contact = () => {
  return (
    <Container fluid className="contact p-0" id="reservas">
      <Row className="g-0">
        <Col
          sm="12"
          md="6"
          lg="6"
          className="contact-left-col"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <div className="contact-content">
            <span className="contact-subtitle">Reservas & Ubicación</span>

            <ReservationForm />

            <div className="contact-info">
              <div className="info-item">
                <strong>
                  <FiMapPin className="footer-icon-contact" /> Dirección:
                </strong>{" "}
                Esquina San Martín y Junín, Tucumán
              </div>
              <div className="info-item">
                <strong>
                  <FaRegClock className="footer-icon-contact" /> Horarios:
                </strong>{" "}
                Martes a Domingo de 08:00 a 00:00 hs.
              </div>
              <div className="info-item">
                <strong>
                  <MdOutlineLocalPhone className="footer-icon-contact" />{" "}
                  Teléfono:
                </strong>{" "}
                +54 9 381 613-5750
              </div>
            </div>
          </div>
        </Col>

        <Col
          sm="12"
          md="6"
          lg="6"
          className="contact-map p-0 m-0"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102370854497!2d-65.209389!3d-26.824146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjYuMKKwNDknMjcuOSJTIDY1wrAxMicyMy44Ilc!5e0!3m2!1ses!2sar!4v1650000000000!5m2!1ses!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de El Viejo Sauce"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
