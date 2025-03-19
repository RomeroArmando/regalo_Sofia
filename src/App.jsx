import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Bienvenida al Desafío</h1>
      <p>Responde correctamente las preguntas para descubrir la sorpresa.</p>
      <button onClick={() => navigate("/pregunta/1")}>Comenzar</button>
    </div>
  );
}

export default App;

