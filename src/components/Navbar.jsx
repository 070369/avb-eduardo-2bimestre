import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "16px",
        display: "flex",
        gap: "24px",
        justifyContent: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#555", // cinza escuro suave
          fontWeight: "600",
          fontSize: "1.1rem",
          transition: "color 0.3s",
        }}
        onMouseEnter={e => (e.target.style.color = "#333")} // cinza mais escuro no hover
        onMouseLeave={e => (e.target.style.color = "#555")}
      >
        Home
      </Link>
      <Link
        to="/favoritos"
        style={{
          textDecoration: "none",
          color: "#555",
          fontWeight: "600",
          fontSize: "1.1rem",
          transition: "color 0.3s",
        }}
        onMouseEnter={e => (e.target.style.color = "#333")}
        onMouseLeave={e => (e.target.style.color = "#555")}
      >
        Favoritos
      </Link>
    </nav>
  );
}
