import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FavoritosProvider } from "./context/FavoritosContext"; // esse está certo!



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritosProvider>
      <App />
    </FavoritosProvider>
  </React.StrictMode>
);
