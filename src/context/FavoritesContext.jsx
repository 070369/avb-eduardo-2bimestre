import { createContext, useContext, useState, useEffect } from "react";

// Criação do contexto
const FavoritosContext = createContext();

// Provider que envolve a aplicação
export function FavoritosProvider({ children }) {
  // Estado inicial carregado do localStorage
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosSalvos = localStorage.getItem("favoritos");
    if (!favoritosSalvos) return [];
    try {
      const parsed = JSON.parse(favoritosSalvos);
      // remove favoritos sem login.uuid
      return parsed.filter((user) => user?.login?.uuid);
    } catch {
      return [];
    }
  });

  // Sempre que favoritos mudam, salvar no localStorage
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  // Adicionar ou remover um favorito
  function toggleFavorito(user) {
    // Proteção contra objetos inválidos
    if (!user?.login?.uuid) {
      console.warn("Usuário inválido em toggleFavorito:", user);
      return;
    }

    const jaExiste = favoritos.some(
      (fav) => fav?.login?.uuid === user.login.uuid
    );

    if (jaExiste) {
      setFavoritos(
        favoritos.filter((fav) => fav?.login?.uuid !== user.login.uuid)
      );
    } else {
      setFavoritos([...favoritos, user]);
    }
  }

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

// Hook para usar o contexto facilmente
export function useFavoritos() {
  return useContext(FavoritosContext);
}
