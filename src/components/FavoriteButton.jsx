import { useFavoritos } from "../context/FavoritesContext";

export default function FavoriteButton({ user }) {
  const { favoritos, toggleFavorito } = useFavoritos();

  const isFavorito = favoritos?.some(
    (fav) => fav?.login?.uuid === user?.login?.uuid
  ) || false;

  return (
    <button
      onClick={() => toggleFavorito(user)}
      style={{
        backgroundColor: isFavorito ? "red" : "white",
        border: "1px solid red",
        borderRadius: "50%",
        width: "32px",
        height: "32px",
        cursor: "pointer",
        color: isFavorito ? "white" : "red",
        fontWeight: "bold"
      }}
      title={isFavorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      ♥
    </button>
  );
}
