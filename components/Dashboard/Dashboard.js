import React from "react";
import estilos from "./Dashboard.module.css";
import Image from "next/image";
import logocol from "../../public/Images/col.png";
import logong from "../../public/Images/ng.png";
import logog1 from "../../public/Images/g1.png";
import logocheck from "../../public/Images/check.png";
import logofce from "../../public/Images/fce.png";
import logousuario from "../../public/Images/usuario.png";

const Dashboard = ({ children }) => {
  return (
    <div>
      {/* SIDEBAR */}
      <div className={estilos.contenedor}>
        {/* Logo Superior */}
        <div className={estilos.logoPrincipal}>
          <Image src={logocol} alt="logocol"></Image>
        </div>
        {/* Lista de iconos */}
        <ul className={estilos.listaIconos}>
          <li>
            <a className={estilos.icono} href="#">
              <Image src={logong} alt="logong"></Image>
            </a>
          </li>
          <li>
            <a className={estilos.icono} href="#">
              <Image src={logog1} alt="logog1"></Image>
            </a>
          </li>
          <li>
            <a className={estilos.icono} href="#">
              <Image src={logocheck} alt="logocheck"></Image>
            </a>
          </li>

          <li>
            <a className={estilos.icono} href="#">
              <Image src={logocol} alt="logofce"></Image>
            </a>
          </li>
          <li>
            <a className={estilos.icono} href="#">
              <Image src={logofce} alt="logofce"></Image>
            </a>
          </li>
          {/* Fin Lista Iconos */}
        </ul>
        <div className={estilos.logoPerfil}>
          <Image src={logousuario} alt="logousuario"></Image>
        </div>
      </div>
      {children}
    </div> /* FIN SIDEBAR */
  );
};

export default Dashboard;
