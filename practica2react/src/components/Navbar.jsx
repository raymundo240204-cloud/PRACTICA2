import { Link, useLocation } from "react-router-dom";
import "../assets/css/apex.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Apex Legends Guía</h1>
        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Inicio
          </Link>
          <Link
            to="/login"
            className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/register"
            className={`nav-link ${location.pathname === "/register" ? "active" : ""}`}
          >
            Registro
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
