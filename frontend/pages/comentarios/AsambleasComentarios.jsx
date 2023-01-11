import React from "react";
import { useRouter } from "next/router";

export const AsambleasComentarios = (props) => {
  const router = useRouter();
  return (
    <div
      style={{ backgroundColor: "white", padding: "10px", borderRadius: "8px" }}
    >
      <h2>
        <strong>{props.titulo}</strong>
      </h2>
      <p>{props.descripcion}</p>
      <button onClick={() => router.push("/comentarios/NuevaPag")}>
        ver comentarios
      </button>
    </div>
  );
};
