import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav style={{ padding: "16px", display: "flex", gap: "16px" }}>
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
      <AppRoutes />
    </>
  );
}

export default App;
