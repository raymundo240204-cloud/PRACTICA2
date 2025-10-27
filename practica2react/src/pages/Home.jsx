import "../assets/css/apex.css";
import { useState, useMemo, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// === Importa tus imágenes ===
import logo from "../assets/img/logo2.png";
import asalto from "../assets/img/ASALTO3.jpg";
import escaramuza from "../assets/img/ESCARAMUZA.jpg";
import control from "../assets/img/CONTROL.jpg";
import curas from "../assets/img/curas.png";
import energia from "../assets/img/energia.png";
import escopeta from "../assets/img/escopeta.png";
import franco from "../assets/img/franco.png";
import shield from "../assets/img/shield.png";
import kit from "../assets/img/kit.png";

export default function Home({ onLogout }) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="site">
      {/* === Sidebar === */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand__logo">
            <img src={logo} alt="Logo Apex Legends" />
          </div>
          <div>
            <h1>Apex Legends</h1>
            <p className="brand__tag">Guía Rápida</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#inicio" className="is-active">Inicio</a>
          <a href="#leyendas">Leyendas</a>
          <a href="#armas">Armas</a>
          <a href="#curaciones">Curaciones</a>
          <a href="#mapas">Mapas</a>
          <a href="#gestion-datos">Gestión</a>

          {/* 🔴 Botón de cerrar sesión */}
          <button
            className="logout-btn"
            onClick={onLogout}
            aria-label="Cerrar sesión"
          >
            ⬅ Cerrar Sesión
          </button>
        </nav>
      </aside>

      {/* === Contenido principal === */}
      <main className="content">
        {/* === Portada === */}
        <section id="inicio" className="container hero section" data-aos="fade-up">
          <video autoPlay muted loop className="bg-video">
            <source src="/assets/video/apex.mp4" type="video/mp4" />
          </video>

          <div className="hero__text">
            <h2>Apex Legends</h2>
            <p>
              Videojuego gratuito de Respawn Entertainment que combina battle royale y shooter:
              escuadrones de tres Leyendas con habilidades únicas que compiten en mapas rotativos.
            </p>
            <div className="actions">
              <a className="btn btn--primary" href="#leyendas">Ver Leyendas</a>
              <a className="btn btn--secondary" href="#armas">Ver Armas</a>
            </div>
          </div>
          <div className="hero__media" data-aos="zoom-in">
            <img src={energia} alt="Arte de Apex Legends" />
          </div>
        </section>

        {/* === Datos rápidos === */}
        <section className="container section stats" data-aos="fade-up">
          <h2>Datos Rápidos</h2>
          <div className="grid">
            <div className="card highlight">
              <h3>24+</h3>
              <p>Leyendas Disponibles</p>
            </div>
            <div className="card highlight">
              <h3>5</h3>
              <p>Mapas Activos</p>
            </div>
            <div className="card highlight">
              <h3>3</h3>
              <p>Modos de Juego</p>
            </div>
          </div>
        </section>

        {/* === Leyendas === */}
        <section id="leyendas" className="container section" data-aos="fade-right">
          <h2>Leyendas</h2>
          <p className="lead">Clases generales y su papel en el equipo.</p>

          <div className="grid gallery">
            <img src={asalto} alt="Clase Asalto" title="Asalto" />
            <img src={escaramuza} alt="Clase Escaramuza" title="Escaramuza" />
            <img src={control} alt="Clase Control" title="Control" />
          </div>
        </section>

        {/* === Armas === */}
        <section id="armas" className="container section" data-aos="fade-left">
          <h2>Armas y Munición</h2>
          <p className="lead">
            Cada tipo de munición define un estilo de juego. Conócelas para obtener ventaja.
          </p>

          <div className="grid gallery">
            <img src={energia} alt="Munición de energía" title="Energía" />
            <img src={escopeta} alt="Escopeta" title="Escopeta" />
            <img src={franco} alt="Francotirador" title="Francotirador" />
          </div>
        </section>

        {/* === Curaciones === */}
        <section id="curaciones" className="container section" data-aos="fade-up">
          <h2>Curaciones</h2>
          <p className="lead">Objetos vitales para sobrevivir durante las partidas.</p>

          <div className="grid gallery">
            <img src={curas} alt="Curas" title="Curas" />
            <img src={shield} alt="Escudo" title="Escudo" />
            <img src={kit} alt="Kit Fénix" title="Kit Fénix" />
          </div>
        </section>

        {/* === Mapas === */}
        <section id="mapas" className="container section" data-aos="fade-up">
          <h2>Mapas</h2>
          <p className="lead">
            Los mapas en Apex Legends rotan constantemente. Consulta el mapa activo en tiempo real.
          </p>

          <div className="iframe-container">
            <iframe
              src="https://apexmap.kuroi.io/br"
              title="Estado de los mapas de Apex Legends"
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* === Gestión de Datos === */}
        <section id="gestion-datos" className="container section" data-aos="fade-up">
          <h2>Gestión de Jugadores</h2>
          <p className="lead">
            Agrega, edita o elimina jugadores y sus leyendas favoritas.
          </p>

          <GestionJugadores />
        </section>

        {/* === Botón volver arriba === */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-top"
        >
          ↑
        </button>

        {/* === Footer === */}
        <footer className="container foot">
          <p>Hecho por Raymundo Carrillo y Aaron Cortes</p>
        </footer>
      </main>
    </div>
  );
}

/* === Componente de tabla interactiva === */
function GestionJugadores() {
  const INICIAL = [
    { id: 1, jugador: "RayoMcQueen", leyenda: "Pathfinder" },
    { id: 2, jugador: "MaLora115", leyenda: "Horizon" },
    { id: 3, jugador: "JugadorAntiguo", leyenda: "Fuse" },
  ];

  const [rows, setRows] = useState(INICIAL);
  const [buscar, setBuscar] = useState("");
  const [form, setForm] = useState({ jugador: "", leyenda: "" });
  const [editId, setEditId] = useState(null);
  const jugadorRef = useRef(null);

  const filtrados = useMemo(() => {
    const q = buscar.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (r) =>
        r.jugador.toLowerCase().includes(q) ||
        r.leyenda.toLowerCase().includes(q)
    );
  }, [rows, buscar]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const limpiar = () => {
    setForm({ jugador: "", leyenda: "" });
    setEditId(null);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const jugador = form.jugador.trim();
    const leyenda = form.leyenda.trim();
    if (!jugador || !leyenda) {
      alert("Completa los campos.");
      return;
    }

    if (editId === null) {
      const nuevo = { id: Date.now(), jugador, leyenda };
      setRows((prev) => [nuevo, ...prev]);
    } else {
      setRows((prev) =>
        prev.map((r) => (r.id === editId ? { ...r, jugador, leyenda } : r))
      );
    }
    limpiar();
  };

  const editar = (row) => {
    setEditId(row.id);
    setForm({ jugador: row.jugador, leyenda: row.leyenda });
    setTimeout(() => {
      if (jugadorRef.current) jugadorRef.current.focus();
    }, 60);
  };

  const eliminar = (id) => {
    if (confirm("¿Eliminar registro?")) {
      setRows((prev) => prev.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="table-container mtop">
      <div className="toolbar">
        <input
          className="input"
          type="search"
          placeholder="Buscar jugador o leyenda…"
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
        />
      </div>

      <form className="form" onSubmit={onSubmit}>
        <h3>{editId === null ? "Agregar Jugador" : "Editar Jugador"}</h3>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="jugador">Jugador</label></td>
              <td>
                <input
                  id="jugador"
                  name="jugador"
                  ref={jugadorRef}
                  className="input"
                  value={form.jugador}
                  onChange={onChange}
                  placeholder="Ej: NoobMaster69"
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="leyenda">Leyenda</label></td>
              <td>
                <input
                  id="leyenda"
                  name="leyenda"
                  className="input"
                  value={form.leyenda}
                  onChange={onChange}
                  placeholder="Ej: Wraith"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: "right" }}>
                <button type="submit" className="btn btn--primary">
                  {editId === null ? "Agregar" : "Guardar"}
                </button>
                {editId !== null && (
                  <button
                    type="button"
                    className="btn btn--secondary"
                    onClick={limpiar}
                    style={{ marginLeft: ".5rem" }}
                  >
                    Cancelar
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <h3 className="mtop">Jugadores</h3>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Leyenda Favorita</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.length === 0 ? (
            <tr><td colSpan="3">Sin resultados.</td></tr>
          ) : (
            filtrados.map((row) => (
              <tr key={row.id}>
                <td>{row.jugador}</td>
                <td>{row.leyenda}</td>
                <td>
                  <button className="btn btn--secondary" onClick={() => editar(row)}>Editar</button>
                  <button
                    className="btn btn--primary"
                    style={{ marginLeft: ".5rem" }}
                    onClick={() => eliminar(row.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
