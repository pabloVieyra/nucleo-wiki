import React from "react";
import estilos from "./Post.module.css";

const Video = () => {
  return (
    <div className={estilos.componentPost}>
      <iframe
        src="https://drive.google.com/file/d/1ykh0R8zEwJWVm3GCvY0u053HOMAg5S_Z/preview"
        width="640"
        height="480"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default Video;
