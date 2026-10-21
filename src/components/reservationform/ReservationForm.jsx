import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./ReservationForm.css";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    personas: "2",
    fecha: "",
    hora: "",
  });

  /* const PHONE_NUMBER = "5493811234567"; */
  const PHONE_NUMBER = "5493816135750";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message =
      `¡Hola! Quisiera hacer una reserva en *El Viejo Sauce*:\n\n` +
      `• *Nombre:* ${formData.nombre}\n` +
      `• *Personas:* ${formData.personas}\n` +
      `• *Fecha:* ${formData.fecha}\n` +
      `• *Hora:* ${formData.hora}\n\n` +
      `¿Tienen disponibilidad?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <Form onSubmit={handleSubmit} className="reservation-card">
      <h3 className="reservation-title">Reservá tu Mesa</h3>
      <p className="reservation-subtitle">
        Completá los datos y te confirmamos al instante por WhatsApp.
      </p>

      <Form.Group className="mb-3">
        <Form.Label className="custom-label">Nombre completo</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          placeholder="Ej: Juan Pérez"
          required
          onChange={handleChange}
          className="custom-input"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="custom-label">Cantidad de personas</Form.Label>
        <Form.Select
          name="personas"
          onChange={handleChange}
          className="custom-input"
        >
          <option value="1">1 Persona</option>
          <option value="2">2 Personas</option>
          <option value="3">3 Personas</option>
          <option value="4">4 Personas</option>
          <option value="5+">5 o más personas</option>
        </Form.Select>
      </Form.Group>

      <div className="d-flex gap-3 mb-4">
        <Form.Group className="w-50">
          <Form.Label className="custom-label">Fecha</Form.Label>
          <Form.Control
            type="date"
            name="fecha"
            required
            onChange={handleChange}
            className="custom-input"
          />
        </Form.Group>

        <Form.Group className="w-50">
          <Form.Label className="custom-label">Hora</Form.Label>
          <Form.Control
            type="time"
            name="hora"
            required
            onChange={handleChange}
            className="custom-input"
          />
        </Form.Group>
      </div>

      <Button type="submit" className="btn-reservation w-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="me-2"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
        </svg>
        Reservar por WhatsApp
      </Button>
    </Form>
  );
};

export default ReservationForm;
