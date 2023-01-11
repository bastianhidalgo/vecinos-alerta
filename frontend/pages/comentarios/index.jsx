import React, { useEffect, useState } from "react";
import Cabecera from "./Cabecera";
import { AsambleasComentarios } from "./AsambleasComentarios";
import axios from "axios";
import { useRouter } from "next/router";

const InicioComentarios = () => {
  const router = useRouter();
  const [asambleas, setAsambleas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getAsambleas = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/asambleas`);
    setAsambleas(response.data);
    setIsLoading(true);
    console.log(response.data);
  };
  useEffect(() => {
    getAsambleas();
  }, []);

  if (isLoading) {
    return (
      <div>
        <Cabecera title="Comentarios" />
        <div
          style={{
            backgroundColor: "#EFF5F5",
            width: "100%",
            height: "100%",
            display: "flex",
            padding: "80px",
          }}
        >
          {asambleas.map((asamblea) => {
            return (
              <AsambleasComentarios
                titulo={asamblea.tema}
                descripcion={asamblea.descripcion}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <h2>
        <strong>No se encontraron asambleas:(</strong>
      </h2>
    );
  }
};
export default InicioComentarios;
