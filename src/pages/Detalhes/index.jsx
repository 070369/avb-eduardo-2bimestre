import { useLocation } from "react-router-dom";

export default function Detalhes() {
  const { state } = useLocation();
  const user = state?.user;

  if (!user) {
    return (
      <p style={{ padding: "2rem", color: "red" }}>
        Usuário não encontrado.
      </p>
    );
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src={user.picture.large}
          alt={user.name.first}
          style={{
            width: "150px",
            borderRadius: "50%",
            margin: "0 auto 1rem",
            display: "block",
          }}
        />
        <h2>
          {user.name.first} {user.name.last}
        </h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Telefone:</strong> {user.phone}
        </p>
        <p>
          <strong>País:</strong> {user.location.country}
        </p>
        <p>
          <strong>Data de Nascimento:</strong>{" "}
          {new Date(user.dob.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
