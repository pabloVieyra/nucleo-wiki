import React from "react";
import estilos from "./Post.module.css";

const Parrafo = ({ values }) => {
  return (
    <div className={`${estilos.Parrafo} ${estilos.componentPost}`}>
      {values}
    </div>
  );
};

export default Parrafo;
