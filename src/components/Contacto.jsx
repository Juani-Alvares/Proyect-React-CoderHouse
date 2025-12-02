import React, { useState } from "react";
import "../styles/contacto.css";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p>Completá el formulario y responderemos lo antes posible.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Mensaje</label>
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
