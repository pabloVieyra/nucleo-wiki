import React from "react";
import estilos from "./Landing.module.css";
import logo from "../../public/Images/logowiki.png";
import perfil from "../../public/Images/perfil.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <div className={estilos.sectionLanding}>
        <div className={estilos.title}>
          <h1>Gastronomico</h1>
        </div>
        <div className={estilos.sectionPost}>
          <div className={estilos.post}></div>
          <div className={estilos.post}></div>
          <div className={estilos.post}></div>
          <div className={estilos.post}></div>
          <div className={estilos.post}></div>
          <div className={estilos.post}></div>
          <div className={estilos.post}></div>
          <div className={estilos.post}></div>
        </div>
      </div>
    </>
  );
};

export default Landing;
