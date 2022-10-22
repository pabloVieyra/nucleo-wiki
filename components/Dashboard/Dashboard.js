import React from "react";
import estilos from "./Dashboard.module.css";
import Image from "next/image";
import logoWiki from "../../public/Images/WIKI NUCLEO/Wiki 2 64px.png";
import logocol from "../../public/Images/col.png";
import logong from "../../public/Images/ng.png";
import logog1 from "../../public/Images/g1.png";
import logocheck from "../../public/Images/check.png";
import logofce from "../../public/Images/fce.png";
import logousuario from "../../public/Images/usuario.png";
import Link from "next/link";

const Dashboard = ({ children }) => {
  return (
    <div>
      {/* SIDEBAR */}
      <div className={estilos.contenedor}>
        {/* Logo Superior */}
        <div className={estilos.logoPrincipal}>
          <Image src={logoWiki} alt="logoWiki"></Image>
        </div>
        {/* Lista de iconos */}
        <ul className={estilos.listaIconos}>
          <li>
            <Link className={estilos.icono} href="/Private/Home/NG">
              <Image src={logong} alt="logong"></Image>
            </Link>
          </li>
          <li>
            <Link className={estilos.icono} href="/Private/Home/G1">
              <Image src={logog1} alt="logog1"></Image>
            </Link>
          </li>
          <li>
            <Link className={estilos.icono} href="/Private/Home/CHECK">
              <Image src={logocheck} alt="logocheck"></Image>
            </Link>
          </li>

          <li>
            <Link className={estilos.icono} href="/Private/Home/COL">
              <Image src={logocol} alt="logofce"></Image>
            </Link>
          </li>
          <li>
            <Link className={estilos.icono} href="/Private/Home/FCE">
              <Image src={logofce} alt="logofce"></Image>
            </Link>
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
