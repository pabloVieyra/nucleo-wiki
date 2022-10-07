import React from "react";
import estilos from "./Post.module.css";

const H2 = ({ values }) => {
  return (
    <div className={`${estilos.H2} ${estilos.componentPost}`}>{values}</div>
  );
};

export default H2;
