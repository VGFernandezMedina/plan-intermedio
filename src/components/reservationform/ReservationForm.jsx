import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./ReservationForm.css";
import { FaWhatsapp } from "react-icons/fa";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    personas: "2",
    fecha: "",
    hora: "12:00",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const PHONE_NUMBER = "5493811234567";

  const todayString = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,40}$/;
    if (!nameRegex.test(formData.nombre.trim())) {
      setErrorMsg(
        "Por favor, ingresá un nombre válido (solo letras, entre 3 y 40 caracteres).",
      );
      return;
    }

    const [year, month, day] = formData.fecha.split("-");
    const selectedDate = new Date(year, month - 1, day);
    const dayOfWeek = selectedDate.getDay();

    if (dayOfWeek === 1) {
      setErrorMsg(
        "Los días Lunes permanecemos cerrados. Por favor elegí otra fecha.",
      );
      return;
    }

    const message =
      `¡Hola! Quisiera hacer una reserva en *El Viejo Sauce*:\n\n` +
      `*Nombre:* ${formData.nombre.trim()}\n` +
      `*Personas:* ${formData.personas}\n` +
      `*Fecha:* ${formData.fecha}\n` +
      `*Hora:* ${formData.hora} hs\n\n` +
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

      {errorMsg && (
        <Alert variant="danger" className="py-2 mb-3 fs-6">
          {errorMsg}
        </Alert>
      )}

      <Form.Group className="mb-3">
        <Form.Label className="custom-label">Nombre completo</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          placeholder="Ej: Juan Pérez"
          required
          maxLength={40}
          value={formData.nombre}
          onChange={handleChange}
          className="custom-input"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="custom-label">Cantidad de personas</Form.Label>
        <Form.Select
          name="personas"
          value={formData.personas}
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
            min={todayString}
            required
            value={formData.fecha}
            onChange={handleChange}
            onClick={(e) => e.target.showPicker && e.target.showPicker()}
            className="custom-input clickable-input"
          />
        </Form.Group>

        <Form.Group className="w-50">
          <Form.Label className="custom-label">Hora</Form.Label>
          <Form.Select
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            className="custom-input clickable-input"
            required
          >
            <option value="" disabled>
              Seleccionar
            </option>
            <option value="08:00">08:00 hs</option>
            <option value="08:30">08:30 hs</option>
            <option value="09:00">09:00 hs</option>
            <option value="09:30">09:30 hs</option>
            <option value="10:00">10:00 hs</option>
            <option value="10:30">10:30 hs</option>
            <option value="11:00">11:00 hs</option>
            <option value="11:30">11:30 hs</option>
            <option value="12:00">12:00 hs</option>
            <option value="12:30">12:30 hs</option>
            <option value="13:00">13:00 hs</option>
            <option value="13:30">13:30 hs</option>
            <option value="14:00">14:00 hs</option>
            <option value="14:30">14:30 hs</option>
            <option value="15:00">15:00 hs</option>
            <option value="15:30">15:30 hs</option>
            <option value="16:00">16:00 hs</option>
            <option value="16:30">16:30 hs</option>
            <option value="17:00">17:00 hs</option>
            <option value="17:30">17:30 hs</option>
            <option value="18:00">18:00 hs</option>
            <option value="18:30">18:30 hs</option>
            <option value="19:00">19:00 hs</option>
            <option value="19:30">19:30 hs</option>
            <option value="20:00">20:00 hs</option>
            <option value="20:30">20:30 hs</option>
            <option value="21:00">21:00 hs</option>
            <option value="21:30">21:30 hs</option>
            <option value="22:00">22:00 hs</option>
            <option value="22:30">22:30 hs</option>
            <option value="23:00">23:00 hs</option>
            <option value="23:30">23:30 hs</option>
            <option value="00:00">00:00 hs</option>
          </Form.Select>
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
