import { useFavoritos } from "../../context/FavoritesContext";
import { Link } from "react-router-dom";
import FavoriteButton from "../../components/FavoriteButton";

export default function Favoritos() {
  const { favoritos } = useFavoritos();

  if (favoritos.length === 0) {
    return <p style={{ padding: "2rem" }}>Nenhum usuário favoritado ainda.</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Usuários Favoritos</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {favoritos.map((user, index) => {
          // Validação: só renderizar se tiver estrutura esperada
          const uuid = user?.login?.uuid;
          if (!uuid) return null;

          return (
            <li
              key={uuid}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
                gap: "1rem",
                cursor: "pointer",
              }}
            >
              <Link
                to={`/detalhes/${uuid}`}
                state={{ user }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textDecoration: "none",
                  color: "inherit",
                  flexGrow: 1,
                }}
              >
                <img
                  src={user.picture?.thumbnail}
                  alt={user.name?.first}
                  style={{ borderRadius: "50%" }}
                />
                <span>
                  {user.name?.first} {user.name?.last} — {user.email}
                </span>
              </Link>
              <FavoriteButton user={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
