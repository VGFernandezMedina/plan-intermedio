import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MenuPage.css";

const menuSections = [
  {
    title: "Cafetería & Desayunos",
    items: [
      {
        name: "Café de Especialidad (Doble)",
        description:
          "Espresso de origen con notas a chocolate amargo y avellana.",
        price: "$3.800",
        badge: "Especialidad",
      },
      {
        name: "Café con Leche & Medialunas (2 un.)",
        description:
          "Café a elección con medialunas de manteca recién horneadas.",
        price: "$4.500",
        badge: null,
      },
      {
        name: "Tostón de Palta & Huevo Poshé",
        description:
          "Pan de masa madre casero, humus, palta y semillas de sésamo.",
        price: "$7.200",
        badge: "Veggie",
      },
    ],
  },
  {
    title: "Entradas & Para Compartir",
    items: [
      {
        name: "Empanadas Tucumanas (3 un.)",
        description:
          "Matambre cortado a cuchillo, jugosas y horneadas en barro.",
        price: "$6.000",
        badge: "Recomendado",
      },
      {
        name: "Sopa de Estación Orgánica",
        description: "Crema de calabaza y jengibre con crotones crujientes.",
        price: "$7.500",
        badge: "Sin TACC",
      },
      {
        name: "Provoleta del Sauce",
        description:
          "Queso provolone fundido con tomates confitados y albahaca.",
        price: "$8.900",
        badge: null,
      },
    ],
  },
  {
    title: "Platos Principales",
    items: [
      {
        name: "Milanesa Especial de la Casa",
        description:
          "Bife de chorizo tierno, papas cuña doradas y ensalada fresca.",
        price: "$12.500",
        badge: "Clásico",
      },
      {
        name: "Pasta Artesanal al Pesto",
        description:
          "Fetuccinis caseros con pesto de albahaca fresca y nueces.",
        price: "$11.000",
        badge: "Veggie",
      },
      {
        name: "Ojo de Bife con Papas rústicas",
        description: "Acompañado de reducción de malbec y vegetales asados.",
        price: "$14.800",
        badge: null,
      },
    ],
  },
  {
    title: "Postres & Bebidas",
    items: [
      {
        name: "Flan Casero de Vainilla",
        description:
          "Receta tradicional con abundancia de dulce de leche y crema.",
        price: "$5.000",
        badge: null,
      },
      {
        name: "Vigilante de Queso y Dulce",
        description: "Queso fresco artesanal con dulce de batata o membrillo.",
        price: "$4.800",
        badge: null,
      },
      {
        name: "Limonada con Menta y Jengibre",
        description: "Jarra individual de limonada casera recién exprimida.",
        price: "$4.200",
        badge: "Fresco",
      },
    ],
  },
];

const MenuPage = () => {
  return (
    <div className="menu-editorial-container">
      <section className="menu-editorial-section py-5">
        <Container>
          <div className="menu-header-page text-center mb-5">
            <span
              className="about-subtitle-page"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Nuestra Carta Completa
            </span>
            <h1
              className="about-title-page"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              El Sabor de la Tradición
            </h1>
            <p
              className="menu-description"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Un recorrido por los sabores de siempre, elaborados con productos
              frescos de la región y la dedicación que nos caracteriza.
            </p>
          </div>

          <Row
            className="justify-content-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Col lg={10}>
              <div className="editorial-menu-box">
                {menuSections.map((section, idx) => (
                  <div key={idx} className="menu-category-block mb-5">
                    <h2 className="menu-category-title">{section.title}</h2>
                    <div className="menu-items-list">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="editorial-item">
                          <div className="editorial-item-header">
                            <span className="editorial-item-name">
                              {item.name}
                              {item.badge && (
                                <Badge className="editorial-badge ms-2">
                                  {item.badge}
                                </Badge>
                              )}
                            </span>
                            <span className="editorial-dots"></span>
                            <span className="editorial-item-price">
                              {item.price}
                            </span>
                          </div>
                          <p className="editorial-item-desc">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>

          <div className="menu-page-cta text-center mt-4">
            <p>¿Querés venir a disfrutar de nuestra esquina?</p>
            <Button as={Link} to="/#reservas" className="btn-about-primary">
              Reservar Mesa
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default MenuPage;
