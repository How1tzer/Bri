import React, { useState } from 'react';
import './Mensaje.css';

const mensajes = [
  "Eres la razón de mis sonrisas 😊",
  "Cada día contigo es un regalo 🎁",
  "Te amo más de lo que puedo expresar ❤️",
  "No hay lugar donde prefiera estar que a tu lado 🌸",
  "Eres mi inspiración y mi felicidad ✨",
];

function Mensaje() {
  const [mensajeActual, setMensajeActual] = useState(mensajes[0]);

  // Función para cambiar el mensaje
  const cambiarMensaje = () => {
    const nuevoMensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    setMensajeActual(nuevoMensaje);
  };

  return (
    <div className="mensaje-container">
      <p className="mensaje">{mensajeActual}</p>
      <button onClick={cambiarMensaje}>💖 Cambiar Mensaje</button>
    </div>
  );
}

export default Mensaje;