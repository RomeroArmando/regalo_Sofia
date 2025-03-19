import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

const preguntas = [
  { id: "1", pregunta: "¿UVA PURPLE TESLA?", opciones: ["33", "31", "666", "69"], respuesta: "33" },
  { id: "2", pregunta: "¿Que supuesto grande descendio a segunda division el 26 de Junio de 2011 por puto y cagon?", opciones: ["San Silencio", "Racingente", "RiBer", "Independiente (el chiste fue enbargado para pagarle a los jugadores)"], respuesta: "RiBer" },
  { id: "3", pregunta: "¿Los patos en la plazas son?", opciones: ["Libres", "Comestibles", "Masonicos", "Gratis"], respuesta: "Gratis" },
  { id: "4", pregunta: "Las palomas tiene relacion con un servicio de inteligencia, ¿cual?", opciones: ["AFI", "Mossad", "CIA", "NSA"], respuesta: "Mossad" },
  { id: "5", pregunta: "Light Yagami (Death Note), Noctis (FFXV) y Viktor (Arkane) tienen algo en comun, ¿que cosa?", opciones: ["Estan afiliados al PJ", "Tienen nexos con los medios de comunicacion que nos controlan mediante noticias falsas tapados por empresas que domindan monopolicamente todo el mercado", "Tienen amigos profundamente heterosexuales", "Le ponen azucar al mate"], respuesta: "Tienen amigos profundamente heterosexuales" },
  { id: "6", pregunta: "¡Ultima pregunta! ¿Cual de las siguientes afirmaciones es verdad?", opciones: ["El 911 fue un trabajo interno", "El 911 fue un trabajo interno", "El 911 fue un trabajo interno", "El 911 fue un trabajo interno"], respuesta: "El 911 fue un trabajo interno" },
];

function Pregunta() {
  const { id } = useParams();
  const navigate = useNavigate();
  const preguntaActual = preguntas.find((p) => p.id === id);

  if (!preguntaActual) return <h2>Pregunta no encontrada</h2>;

  const manejarRespuesta = (opcion) => {
    if (opcion === preguntaActual.respuesta) {
      Swal.fire({
        title: "¡Correcto!",
        text: "Vamos a la siguiente pregunta.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        const siguientePregunta = preguntas.find((p) => p.id === (parseInt(id) + 1).toString());
        if (siguientePregunta) {
          navigate(`/pregunta/${siguientePregunta.id}`);
        } else {
          navigate("/fin");
        }
      });
    } else {
      Swal.fire({
        title: "Incorrecto",
        text: "Inténtalo de nuevo.",
        icon: "error",
      });
    }
  };

  return (
    <div className="container">
      <h2>{preguntaActual.pregunta}</h2>
      {preguntaActual.opciones.map((opcion, i) => (
        <button key={i} onClick={() => manejarRespuesta(opcion)}>
          {opcion}
        </button>
      ))}
    </div>
  );
}

export default Pregunta;
