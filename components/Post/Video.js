import React from "react";
import estilos from "./Post.module.css";

const Video = ({ values }) => {
  return (
    <div className={estilos.componentPost}>
      <iframe className={estilos.iframe} src={values} allow="autoplay"></iframe>
    </div>
  );
};

export default Video;
