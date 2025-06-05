import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";



export default function UserCard({ usuario }) {
  const { favoritos, adicionarFavorito, removerFavorito, estaFavoritado } = useContext(FavoritosContext);

  const favorito = estaFavoritado(usuario.email);

  const toggleFavorito = () => {
    if (favorito) {
      removerFavorito(usuario.email);
    } else {
      adicionarFavorito(usuario);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "8px" }}>
      <img src={usuario.picture.thumbnail} alt={usuario.name.first} />
      <p>{usuario.name.first} {usuario.name.last}</p>
      <p>Email: {usuario.email}</p>
      <button onClick={toggleFavorito}>
        {favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      </button>
    </div>
  );
}
