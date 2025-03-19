import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Fin() {
  const navigate = useNavigate();

  const mostrarPista = () => {
    Swal.fire({
      title: "¡Felicidades! Llegaste casi estas en el final",
      text: "Pista final: https://drive.google.com/drive/folders/1nDIHsfLPwjlZl8XSbVplUaudo60ExFPF?usp=sharing",
      icon: "info",
    });
  };

  return (
    <div className="container">
      <h2>¡Has terminado el juego!</h2>
      <button onClick={mostrarPista}>Ver Pista Final</button>
      <button onClick={() => navigate("/")}>Volver al inicio</button>
    </div>
  );
}

export default Fin;
