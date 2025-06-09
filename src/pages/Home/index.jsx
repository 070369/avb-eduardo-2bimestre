import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "../../components/FavoriteButton";

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=15&nat=us,br,es")
      .then((res) => {
        console.log("API retornou:", res.data.results);
        setUsuarios(res.data.results);
      })
      .catch((err) => console.error("Erro ao buscar usuários:", err));
  }, []);

  const thStyle = {
    padding: "12px",
    border: "1px solid #ccc",
    fontWeight: "bold",
    fontSize: "1rem"
  };

  const tdStyle = {
    padding: "10px",
    border: "1px solid #eee",
    fontSize: "0.9rem",
    color: "#333",
    textAlign: "center"
  };

  return (
    <div style={{ padding: "2rem", overflowX: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Usuários em Destaque
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: "600px"
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5" }}>
            <th style={thStyle}>Foto</th>
            <th style={thStyle}>Nome</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>País</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user, index) => (
            <tr key={index} style={{ cursor: "default" }}>
              <td style={tdStyle}>
                <Link
                  to={`/detalhes/${index}`}
                  state={{ user }}
                  style={{ display: "inline-block" }} // Centraliza a imagem
                >
                  <img
                    src={user.picture.large}
                    alt={user.name.first}
                    style={{
                      width: "50px",
                      borderRadius: "50%",
                      cursor: "pointer"
                    }}
                  />
                </Link>
              </td>
              <td style={tdStyle}>
                <Link
                  to={`/detalhes/${index}`}
                  state={{ user }}
                  style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
                >
                  {user.name.first} {user.name.last}
                </Link>
              </td>
              <td style={tdStyle}>
                <Link
                  to={`/detalhes/${index}`}
                  state={{ user }}
                  style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
                >
                  {user.email}
                </Link>
              </td>
              <td style={tdStyle}>
                <Link
                  to={`/detalhes/${index}`}
                  state={{ user }}
                  style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
                >
                  {user.location.country}
                </Link>
              </td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                <FavoriteButton user={user} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
