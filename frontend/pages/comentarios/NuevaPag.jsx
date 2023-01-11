import React from "react";
import { useRouter } from "next/router";
import AgregarComentario from "./AgregarComentario";
import axios from "axios";

const NuevaPag = () => {
  const router = useRouter();
  const [comentarios, setComentarios] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const getAsambleas = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/comentarios`);
    setComentarios(response.data);
    setIsLoading(true);
    console.log(response.data);
  };
  React.useEffect(() => {
    getAsambleas();
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#EFF5F5",
        width: "100%",
        height: "100%",
        display: "flex",
        padding: "80px",
        flexWrap: "wrap",
      }}
    >
      {comentarios.map((comentario) => {
        return (
          <div
            style={{
              backgroundColor: "white",
              padding: "5px",
              display: "flex",
              margin: "5px",
              flexDirection: "column",
            }}
          >
            <strong>{comentario.autor}</strong>
            {comentario.descripcion}
          </div>
        );
      })}
      <div style={{ width: "100%" }}>
        <AgregarComentario />
      </div>
    </div>
  );
};

export default NuevaPag;
