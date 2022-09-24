import React from "react";
import estilos from "./Post.module.css";
import Image from "next/image";
import img from "../../public/Images/ng.png";

const Imagen = () => {
  return (
    <div className={estilos.componentPost}>
      <Image src={img} alt="check"></Image>
    </div>
  );
};

export default Imagen;
