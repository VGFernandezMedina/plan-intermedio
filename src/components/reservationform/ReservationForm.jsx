import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./ReservationForm.css";
import { FaWhatsapp } from "react-icons/fa";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    personas: "2",
    fecha: "",
    hora: "",
  });

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
    <Form onSubmit={handleSubmit} className="reservation-card mb-4">
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
        <FaWhatsapp size={22} />
        Reservar
      </Button>
    </Form>
  );
};

export default ReservationForm;
