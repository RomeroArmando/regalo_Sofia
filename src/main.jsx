import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Pregunta from "./pages/Pregunta";
import Fin from "./pages/Fin";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pregunta/:id" element={<Pregunta />} />
        <Route path="/fin" element={<Fin />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
