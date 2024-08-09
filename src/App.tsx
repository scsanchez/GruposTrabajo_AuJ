import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="nav-links">
          <Link to="/" style={{ marginRight: "10px" }}>
            Perfil
          </Link>

          <Link to="/technologies" style={{ marginRight: "10px" }}>
            Mis tecnologías
          </Link>

          <Link to="/proyects" style={{ marginRight: "10px" }}>
            Mis proyectos
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/proyects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
