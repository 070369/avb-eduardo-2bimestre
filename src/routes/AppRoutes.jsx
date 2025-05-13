import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalhes from "../pages/Detalhes";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
      </Routes>
    </BrowserRouter>
  );
}

