import React, { useState, useEffect } from "react";
import estilos from "./NavBar.module.css";
import logo from "../../public/Images/logo.png";
import perfil from "../../public/Images/perfil.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import sistemas from "../../utilities/Systems.json";
import { getPostPorCategoria } from "../../services/PostService";

const NavBar = () => {
  const [categorias, setCategorias] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);

  const GetCategoria = () => {
    axios
      .get("/api/Categorias")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    GetCategoria();
  }, []);

  function filtradoPorSistema(sistema, categoria) {
    if (categoria.sistema === sistema) {
      return categoria;
    }
  }

  const getPostPorCa = async (id) => {
    const resp = await getPostPorCategoria(id);

    return resp;
  };

  useEffect(() => {
    const ng = categorias.filter((categoria) =>
      filtradoPorSistema(1, categoria)
    );
    ng.map((a) => {
      a.post = [];
      getPostPorCa(a.id).then((res) => {
        a.post = res;
      });
    });
    const g1 = categorias.filter((categoria) =>
      filtradoPorSistema(2, categoria)
    );
    g1.map((a) => {
      a.post = [];
      getPostPorCa(a.id).then((res) => {
        a.post = res;
      });
    });
    const check = categorias.filter((categoria) =>
      filtradoPorSistema(3, categoria)
    );
    check.map((a) => {
      a.post = [];
      getPostPorCa(a.id).then((res) => {
        a.post = res;
      });
    });
    const fce = categorias.filter((categoria) =>
      filtradoPorSistema(4, categoria)
    );
    fce.map((a) => {
      a.post = [];
      getPostPorCa(a.id).then((res) => {
        a.post = res;
      });
    });
    const col = categorias.filter((categoria) =>
      filtradoPorSistema(5, categoria)
    );
    col.map((a) => {
      a.post = [];
      getPostPorCa(a.id).then((res) => {
        a.post = res;
      });
    });
    sistemas.map((b) => {
      if (b.Sid === 1) {
        b.id = ng;
      }
      if (b.Sid === 2) {
        b.id = g1;
      }
      if (b.Sid === 3) {
        b.id = check;
      }
      if (b.Sid === 4) {
        b.id = fce;
      }
      if (b.Sid === 5) {
        b.id = col;
      }
    });
    console.log(sistemas);
  }, [categorias]);

  return (
    <div className={estilos.todo}>
      <div className={estilos.nav}>
        <div className={estilos.logo}>
          <Link href="/">
            <Image src={logo} alt="logo"></Image>
          </Link>
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
              } ${hover ? `${estilos.shadowOn}` : `${estilos.shadowOff}`}`}
            >
              {" "}
              {sistemas.map((menu) => {
                return (
                  <>
                    <li
                      onMouseEnter={() => setHover((current) => !current)}
                      onMouseLeave={() => setHover((current) => !current)}
                      className={`${estilos.btn} ${estilos.btnCenter} ${estilos.selected2}`}
                    >
                      <a href="#" key={menu.Sid}>
                        {menu.sistema}
                      </a>
                      <ul className={`${estilos.menuVer} ${estilos.menu2}`}>
                        {menu.id.map((submenu) => {
                          return (
                            <>
                              <li
                                className={`${estilos.btn} ${estilos.selected3}`}
                              >
                                <a key={submenu.id}>{submenu.nombre}</a>
                                <ul
                                  className={`${estilos.subMenu} ${estilos.menuVer} ${estilos.menu3}`}
                                >
                                  {submenu.post.map((submenusub) => {
                                    return (
                                      <>
                                        <li className={`${estilos.btn}`}>
                                          <Link
                                            href={`/Posts/${submenusub.id}`}
                                            key={submenusub.id}
                                          >
                                            {submenusub.nombre}
                                          </Link>
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

          <li
            className={`${estilos.NavBar} ${estilos.btn} ${estilos.contact} ${estilos.eje}`}
          >
            <Link href="/Contacto">
              <a>Contacto</a>
            </Link>
          </li>

          <li className={`${estilos.perfil} ${estilos.eje}`}>
            <Link href="/LoginPage">
              <Image src={perfil} alt="perfil"></Image>
            </Link>
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
