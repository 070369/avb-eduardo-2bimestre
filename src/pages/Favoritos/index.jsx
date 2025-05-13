import { useEffect, useState } from "react";
import axios from "axios";

export default function Favoritos() {
  const [conselho, setConselho] = useState("");

  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice")
      .then((res) => setConselho(res.data.slip.advice))
      .catch((err) => console.error("Erro ao buscar conselho:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Conselho do Dia</h2>
      <p style={{ fontStyle: "italic", fontSize: "1.5rem" }}>{conselho}</p>
    </div>
  );
}
