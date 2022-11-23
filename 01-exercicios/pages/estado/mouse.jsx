import { useState } from "react";

const estilo = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#222",
  color: "#fff",
  fontSize: "30px",
  height: "100vh",
};

export default function Mouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function handleMouseMoveu(ev) {
    setX(ev.clientX);
    setY(ev.clientY);
  }

  return (
    <div style={estilo} onMouseMove={handleMouseMoveu}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  );
}
