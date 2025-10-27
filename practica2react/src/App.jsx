import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Revisar si hay sesión guardada
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Función de login
  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    setIsAuthenticated(true);
  };

  // Función de logout
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            {/* Si no está logueado, cualquier ruta redirige al login */}
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home onLogout={handleLogout} />} />
            {/* Si intenta ir a login o register estando logueado, lo manda al Home */}
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/register" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


