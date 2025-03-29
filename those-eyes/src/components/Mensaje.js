import React, { useState, useEffect } from 'react';
import './Mensaje.css'; // Asegúrate de tener el archivo CSS para los estilos

const Mensaje = () => {
  // Lista de mensajes para mostrar
  const mensajes = [
    '¡Hola! Este es tu primer mensaje.',
    '¡Sorpresa! Aquí viene otro mensaje.',
    '¡Espero que estés sonriendo! 😄',
    '¡Este es un mensaje más! 🎉'
  ];

  // Generamos un índice aleatorio inicial para el primer mensaje
  const getRandomIndex = () => Math.floor(Math.random() * mensajes.length);

  // Estado para el mensaje actual, con un índice aleatorio
  const [mensajeIndex, setMensajeIndex] = useState(getRandomIndex);

  // Función para cambiar el mensaje al hacer clic o tocar
  const handleClick = () => {
    setMensajeIndex((prevIndex) => (prevIndex + 1) % mensajes.length);
  };

  // Usamos useEffect para agregar el manejador de eventos a todo el documento
  useEffect(() => {
    // Agregamos el evento de clic al documento
    document.addEventListener('click', handleClick);

    // Limpiamos el evento cuando el componente se desmonta
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="mensaje-container">
      {/* Muestra el mensaje actual */}
      <div className="mensaje">{mensajes[mensajeIndex]}</div>
    </div>
  );
};

export default Mensaje;
