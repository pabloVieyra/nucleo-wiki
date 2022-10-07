import React from "react";
import estilos from "./Post.module.css";

const H3 = ({ values }) => {
  return (
    <div className={`${estilos.H3} ${estilos.componentPost}`}>{values}</div>
  );
};

export default H3;
