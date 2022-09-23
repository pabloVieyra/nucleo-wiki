import React from "react";
import estilos from "./Dashboard.module.css";
import Image from "next/image";
import logocol from "../../public/Images/col.png";
import logong from "../../public/Images/ng.png";
import logog1 from "../../public/Images/g1.png";
import logocheck from "../../public/Images/check.png";
import logofce from "../../public/Images/fce.png";
import logousuario from "../../public/Images/usuario.png";

const Dashboard = () => {
  return (
    <div>
      {/* BUSQUEDA */}
      <div className="items-center px-4 flex justify-center pt-2 bg-gray-900">
        <div className="relative mr-3">
          <div className="absolute top-3 left-3 items-center">
            <svg
              className="w-6 h-10 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg>
          </div>
          <input
            type="text"
            className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
            placeholder="Buscar"
          />
        </div>
      </div>

      {/* SIDEBAR */}
      <nav className={estilos.contenedor}>
        <ul className={estilos.listaIconos}>
          {/* Logo Superior */}
          <div className={estilos.logoPrincipal}>
            <li className={estilos.logoNucleo}>
              <div className={estilos.logo1}>
                <Image src={logocol} alt="logocol"></Image>
              </div>
            </li>
          </div>
          {/* Lista de iconos */}
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
              <Image src={logofce} alt="logofce"></Image>
            </a>
          </li>
          {/* Fin Lista Iconos */}
        </ul>
        <ul>
          <div className={estilos.logoNucleo2}>
            <li>
              <div className={estilos.logoPerfil}>
                <Image
                  className={estilos.imgPerfil}
                  src={logousuario}
                  alt="logousuario"
                ></Image>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </div> /* FIN SIDEBAR */
  );
};

export default Dashboard;
