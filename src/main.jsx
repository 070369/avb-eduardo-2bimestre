import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavoritosProvider } from "./context/FavoritesContext"; // prefira caminho relativo

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritosProvider>
        <App />
      </FavoritosProvider>
    </BrowserRouter>
  </React.StrictMode>
);
