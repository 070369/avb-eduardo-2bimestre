import { createContext, useState } from "react";

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  function adicionarFavorito(usuario) {
    setFavoritos((prev) => [...prev, usuario]);
  }

  function removerFavorito(email) {
    setFavoritos((prev) => prev.filter((u) => u.email !== email));
  }

  function estaFavoritado(email) {
    return favoritos.some((u) => u.email === email);
  }

  return (
    <FavoritosContext.Provider
      value={{ favoritos, adicionarFavorito, removerFavorito, estaFavoritado }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

