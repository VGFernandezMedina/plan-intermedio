import { Row, Col, Container, Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SobreNosotros.css";
import about1 from "/about1.jpg";

const SobreNosotros = () => {
  return (
    <div className="about-page">
      {/* Fila principal: Imagen + Descripción + Botones */}
      <Row className="g-0 align-items-stretch about-full-row">
        {/* Columna 1 (50%): Imagen de borde a borde */}
        <Col lg={6} className="p-0">
          <div className="about-img-wrapper">
            <img
              src={about1}
              alt="La esquina de El Viejo Sauce"
              className="about-img-full"
            />
          </div>
        </Col>

        {/* Columna 2 (50%): Títulos, descripción ampliada y acciones */}
        <Col lg={6} className="about-content-col">
          <div className="about-content-wrapper">
            <span className="about-subtitle-page">Sobre Nosotros</span>
            <h1 className="about-title-page">
              Un rincón con alma en la ciudad
            </h1>
            <p className="about-description-page mb-3">
              Nacimos bajo la sombra de los eucaliptos y el viejo sauce en la
              emblemática esquina de San Martín y Junín. Un espacio pensado para
              ser el punto de encuentro del barrio, donde combinamos la
              tradición artesanal con la calidez de sentirte como en casa.
            </p>
            <p className="about-description-page mb-4">
              Cada receta refleja nuestra dedicación por la cocina casera,
              utilizando ingredientes frescos de la región y cuidando cada
              detalle, desde la molienda de nuestro café de especialidad hasta
              la horneada del día.
            </p>

            {/* Botones de acción */}
            <div className="about-actions">
              <Button
                as={Link}
                to="/menu"
                className="btn-about-primary me-sm-3 mb-3 mb-sm-0"
              >
                Ver Menú
              </Button>
              <Button as={Link} to="/contacto" className="btn-about-secondary">
                Reservar Mesa
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      {/* Sección de Preguntas Frecuentes (FAQ) */}
      <section className="faq-section py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="faq-subtitle-page">Dudas habituales</span>
            <h2 className="faq-main-title">Preguntas Frecuentes</h2>
          </div>

          <Row className="justify-content-center">
            <Col lg={8}>
              <Accordion defaultActiveKey="0" className="custom-faq-accordion">
                <Accordion.Item eventKey="0" className="faq-item">
                  <Accordion.Header>
                    ¿Es necesario hacer reserva previa?
                  </Accordion.Header>
                  <Accordion.Body>
                    No es obligatorio, siempre podés acercarte directamente. Sin
                    embargo, recomendamos reservar con anticipación para los
                    fines de semana o grupos grandes para asegurarte lugar en el
                    sector de terraza o interior.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="faq-item">
                  <Accordion.Header>
                    ¿Tienen opciones vegetarianas, veganas o TACC?
                  </Accordion.Header>
                  <Accordion.Body>
                    ¡Sí! Contamos con alternativas vegetarianas, opciones
                    veganas y platos elaborados sin ingredientes que contengan
                    gluten. Podés consultar las etiquetas correspondientes en
                    nuestro menú digital o avisarle a nuestro equipo al pedir.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="faq-item">
                  <Accordion.Header>¿Son Pet Friendly?</Accordion.Header>
                  <Accordion.Body>
                    ¡Totalmente! Las mascotas son más que bienvenidas en todas
                    nuestras mesas del sector al aire libre bajo la sombra de
                    los árboles. Contamos con platitos de agua frescos para
                    ellas.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="faq-item">
                  <Accordion.Header>
                    ¿Cuáles son los horarios de atención?
                  </Accordion.Header>
                  <Accordion.Body>
                    Estamos abiertos de Martes a Domingo de 08:00 a 00:00 hs,
                    ofreciendo opciones para desayunos, almuerzos, meriendas,
                    café de especialidad y cenas. Los lunes permanecemos
                    cerrados.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className="faq-item">
                  <Accordion.Header>
                    ¿Tienen espacio para eventos privados o cumpleaños?
                  </Accordion.Header>
                  <Accordion.Body>
                    Sí, disponemos de sectores adaptables para pequeñas
                    reuniones, cumpleaños o eventos corporativos. Podés
                    escribirnos a través de nuestro formulario de contacto o
                    WhatsApp para coordinar un menú especial.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SobreNosotros;
