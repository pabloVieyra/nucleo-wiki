import React from "react";
import estilos from "./NavBar.module.css";
import logo from "../../public/Images/logo.png";
import perfil from "../../public/Images/perfil.png";
import Image from "next/image";
import { useState } from "react";
import System from "./Items.json";
import ReactDOM from "react-dom/client";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const [hover, setHover] = useState(false);

  return (
    <div className={estilos.todo}>
      <div className={estilos.nav}>
        <div className={estilos.logo}>
          <Image src={logo} alt="logo"></Image>
        </div>

        <ul className={estilos.NavBar}>
          <li
            className={` ${estilos.btn} ${estilos.selected1} ${estilos.eje} ${estilos.blur}`}
          >
            <button
              onClick={() => setClicked((current) => !current)}
              className={estilos.fijo}
            >
              {" "}
              Sistemas
            </button>

            <ul
              className={`${estilos.menuHor} ${
                clicked ? `${estilos.muestra}` : `${estilos.menu}`
              }`}
            >
              {System.map((menu) => {
                return (
                  <>
                    <li
                      onMouseEnter={() => setHover((current) => !current)}
                      onMouseLeave={() => setHover((current) => !current)}
                      className={`${estilos.btn} ${estilos.selected2}`}
                    >
                      <a href="#" key={menu.id}>
                        {menu.text}
                      </a>

                      <ul className={`${estilos.menuVer} ${estilos.menu2}`}>
                        {menu.subid.map((submenu) => {
                          return (
                            <>
                              <li
                                className={`${estilos.btn} ${estilos.selected3}`}
                              >
                                <a href="#" key={submenu.id}>
                                  {submenu.text}
                                </a>
                                <ul
                                  className={`${estilos.subMenu} ${estilos.menuVer} ${estilos.menu3}`}
                                >
                                  {submenu.subid.map((submenusub) => {
                                    return (
                                      <>
                                        <li className={`${estilos.btn}`}>
                                          <a href="#" key={submenusub.id}>
                                            {submenusub.text}
                                          </a>
                                        </li>
                                      </>
                                    );
                                  })}
                                </ul>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </li>
                  </>
                );
              })}
            </ul>
          </li>

          <li className={`${estilos.btn} ${estilos.contact}`}>
            <button>Contacto</button>
          </li>

          <li className={`${estilos.perfil} ${estilos.eje}`}>
            <Image src={perfil} alt="perfil"></Image>
          </li>
        </ul>
      </div>

      <div
        className={` ${
          hover ? `${estilos.blurContainOn}` : `${estilos.blurContainOff}`
        } ${estilos.blurContain}`}
      ></div>
    </div>
  );
};

export default NavBar;
