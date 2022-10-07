import React from "react";
import estilos from "./Post.module.css";

const H1 = ({ values }) => {
  return (
    <div className={`${estilos.H1} ${estilos.componentPost}`}>{values}</div>
  );
};

export default H1;
