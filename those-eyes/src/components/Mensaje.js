import React, { useState, useEffect } from 'react';
import './Mensaje.css'; // Asegúrate de tener el archivo CSS para los estilos

const Mensaje = () => {
  // Lista de mensajes para mostrar
  const mensajes = [
    "No sabía por qué me gustaban tanto las estrellas hasta que conocí tus pecas.",
    "Siempre serás mi apuesta más importante.",
    "Si nunca nos hubiéramos conocido y te viera por primera vez, me enamoraría de ti otra vez a pesar de todo.",
    "Deja de buscar motivación y empieza a construir hábitos. La motivación se muere rápido, la disciplina no.",
    "En quién te estás convirtiendo es más importante que quién solías ser.",
    "Ya no quiero conocer a alguien más. Contigo ha terminado la búsqueda, te elijo con la tranquilidad de que también te elegiré mañana.",
    "Trata a los demás como te gustaría ser tratada, porque la bondad que ofreces se refleja en el tipo de persona que eres.",
    "Mejor comer pan duro donde reina la paz, que vivir en una casa llena de banquetes donde hay peleas.",
    "Sé que te quiero porque cuando estás lejos pasas de estar conmigo a estar en mí.",
    "El optimismo es la fe que conduce al logro. Nada se puede hacer sin esperanza y confianza.",
    "Yo estaré contigo, y no te abandonaré hasta cumplir lo que te he prometido. Te cuidaré por donde quiera que vayas.",
    "Quien se rinde ante un problema no demuestra ni fuerza ni carácter.",
    "Ser profundamente amado te da fuerzas, mientras que amar profundamente a alguien te da coraje.",
    "Gracias por todos los días que me hiciste sentir querido y apreciado. Estoy corto de palabras para decirte lo agradecido que estoy.",
    "Quizá no soy la mejor persona en tu vida, pero te quiero con todo mi corazón.",
    "Me gusta que sepas dónde estoy, no por obligación, sino porque tienes derecho a saber dónde te llevo cuando no te llevo de la mano.",
    "Dios nunca quitará algo de tu vida sin la intención de darte algo mucho mejor.",
    "Sabes que estás enamorado cuando no puedes dormir, porque la realidad es finalmente mejor que los sueños.",
    "Eres bonita, pero no bonita de esas que tienes cerca y suspiras. Bonita de aquellas otras que tienes lejos y te falta el aire.",
    "Pecas hermosas <3.",
    "Si tuviera que volver a comenzar mi vida intentaría encontrarte mucho más antes.",
    "Llegué tarde para ser tu primer amor, pero justo a tiempo para ser el de toda la vida.",
    "Qué linda te ves hoy. Sé que no te he visto, pero sé que lo estás.",
    "No te necesito para nada, pero te quiero para todo.",
    "Mi abuelita me dijo que esperara hasta encontrar alguien que amara y todo fuera un sí, me alegro de haberte encontrado.",
    "Jamás podría odiar a quien muchas veces fue el motivo por el cual me fui a dormir contento.",
    "Te voy a cuidar siempre, porque alguien como tú se merece lo mejor del mundo.",
    "Me gustas para cosas tan simples como ver una película, y me gustas para cosas tan complejas como ver los años pasar.",
    "NTP, mi familia me enseñó a ser honesto con la gente que quiero, por eso siempre soy honesto contigo.",
    "Si te cansas, aprende a descansar, no a renunciar.",
    "Hacer esto me dio más gusto que cansancio, eso solo dice lo mucho que te quiero. jsjs"
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
