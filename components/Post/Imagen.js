import React from "react";
import estilos from "./Post.module.css";
import Image from "next/image";

const Imagen = ({ values }) => {
  return (
    <div className={estilos.componentPost}>
      <Image src={values} alt="check" width="640" height="380"></Image>
    </div>
  );
};

export default Imagen;
