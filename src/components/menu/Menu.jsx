import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./Menu.css";

const categories = ["Todos", "Entradas", "Principales", "Postres", "Bebidas"];

const dishes = [
  {
    id: 1,
    name: "Empanadas de carne",
    category: "Entradas",
    description: "Carne cortada a cuchillo y especias.",
    price: "$6.000",
    image: "/empanadas.webp",
  },
  {
    id: 2,
    name: "Sopa de estación",
    category: "Entradas",
    description: "Verduras frescas y hierbas aromáticas.",
    price: "$7.500",
    image: "/Sopa.webp",
  },
  {
    id: 3,
    name: "Milanesa de la casa",
    category: "Principales",
    description: "Con papas doradas y limón.",
    price: "$12.500",
    image: "/milanesas.webp",
  },
  {
    id: 4,
    name: "Pasta artesanal",
    category: "Principales",
    description: "Pasta casera con salsa de tomate.",
    price: "$11.000",
    image: "/Pasta.webp",
  },
  {
    id: 5,
    name: "Flan casero",
    category: "Postres",
    description: "Con dulce de leche y crema.",
    price: "$5.000",
    image: "/flan.webp",
  },
  {
    id: 6,
    name: "Café de especialidad",
    category: "Bebidas",
    description: "Café recién molido, intenso y aromático.",
    price: "$3.500",
    image: "/cafe.webp",
  },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredDishes =
    selectedCategory === "Todos"
      ? dishes
      : dishes.filter(function (dish) {
          return dish.category === selectedCategory;
        });

  return (
    <section className="menu-section" id="menu">
      <Container>
        <div className="menu-header">
          <p className="menu-subtitle">Nuestra carta</p>

          <h2>Sabores para disfrutar</h2>

          <p className="menu-description">
            Cocina de barrio, ingredientes frescos y recetas hechas con cariño.
          </p>
        </div>

        <div className="menu-filters" aria-label="Filtrar platos por categoría">
          {categories.map(function (category) {
            return (
              <Button
                key={category}
                className={
                  selectedCategory === category
                    ? "menu-filter active"
                    : "menu-filter"
                }
                variant="light"
                aria-pressed={selectedCategory === category}
                onClick={function () {
                  setSelectedCategory(category);
                }}
              >
                {category}
              </Button>
            );
          })}
        </div>

        <div className="menu-grid">
          {filteredDishes.map(function (dish) {
            return (
              <article className="menu-card" key={dish.id}>
                <img
                  className="menu-card-image"
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                />

                <div className="menu-card-content">
                  <div className="menu-card-heading">
                    <h3>{dish.name}</h3>
                    <span className="menu-card-price">{dish.price}</span>
                  </div>

                  <p>{dish.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="menu-footer">
          <p>¿Querés descubrir todos nuestros sabores?</p>
          <Button className="menu-more-button" href="/menu">
            Ver carta completa
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Menu;
