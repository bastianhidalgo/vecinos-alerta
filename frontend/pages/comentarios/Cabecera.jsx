import React from "react";

const Cabecera = (props) => {
  return (
    <div className="w-100 header">
      <h1 className="text-center">{props.title}</h1>
    </div>
  );
};

export default Cabecera;
