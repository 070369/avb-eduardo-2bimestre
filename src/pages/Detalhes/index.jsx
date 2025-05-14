import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detalhes() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error("Erro ao buscar post:", err));
  }, [id]);

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem", fontFamily: "sans-serif" }}>
      <h2 style={{ marginBottom: "1rem" }}>Detalhes do Post</h2>
      <p><strong>Título:</strong> {post.title}</p>
      <p><strong>Conteúdo:</strong> {post.body}</p>
    </div>
  );
}
