import React, { useRef } from "react";
import style from "./HomePage.module.css";
import logoNg from "../../public/Images/ng.png";
import logoG1 from "../../public/Images/g1.png";
import logoCheck from "../../public/Images/check.png";
import logoCol from "../../public/Images/col.png";
import logoFce from "../../public/Images/fce.png";
import Image from "next/image";
import Landing from "../Landing/Landing";
import { ref } from "yup";
import ngLanding from "../../utilities/gastronomicoLanding.json";
import g1Landing from "../../utilities/g1Landing.json";
import checkLanding from "../../utilities/checkLanding.json";
import colLanding from "../../utilities/colLanding.json";
import fceLanding from "../../utilities/fceLanding.json";

const HomePage = () => {
  const gastronomico = useRef(null);

  const Gastronomico = () => {
    gastronomico.current?.scrollIntoView({ behavior: "smooth" });
  };

  const check = useRef(null);

  const Check = () => {
    check.current?.scrollIntoView({ behavior: "smooth" });
  };

  const g1 = useRef(null);

  const G1 = () => {
    g1.current?.scrollIntoView({ behavior: "smooth" });
  };

  const col = useRef(null);

  const Col = () => {
    col.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fce = useRef(null);

  const FCE = () => {
    fce.current?.scrollIntoView({ behavior: "smooth" });
  };

  const inicio = useRef(null);

  const INICIO = () => {
    inicio.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={style.buttonFixed} onClick={INICIO}>
        Volver a inicio
      </div>
      <div className={style.title} ref={inicio}>
        <h1>Elegi tu sistema</h1>
      </div>
      <div className={style.sectionCard}>
        <div className={style.card} onClick={Gastronomico}>
          <div className={style.imgIcon}>
            <Image
              width={150}
              height={150}
              src={logoNg}
              alt="gastronomico"
            ></Image>
          </div>
          <h2 className={style.titleCard}>Gastronómico</h2>
          <p className={style.text}>
            Rapidez en la toma de pedidos para restaurants, bares, pizzerías y
            delivery, control de adición, comandas, stock, caja, empleados y
            mucho más. Informacion estadistica indispensable para la toma de
            desiciones
          </p>
        </div>

        <div className={style.card} onClick={Check}>
          <div className={style.imgIcon}>
            <Image width={150} height={150} src={logoCheck} alt="check"></Image>
          </div>
          <h2 className={style.titleCard}>Check</h2>
          <p className={style.text}>
            Sistema en la Nube especializado para bares y restaurants, con
            control de delivery y salon, permitiendo emitir comandas y mantener
            un control de caja, stock, empleados y mucho mas. Toda la
            informacion indispensable para tomar desiciones
          </p>
        </div>

        <div className={style.card} onClick={G1}>
          <div className={style.imgIcon}>
            <Image width={150} height={150} src={logoG1} alt="G1"></Image>
          </div>
          <h2 className={style.titleCard}>Gestion 1 G1</h2>
          <p className={style.text}>
            Controla el stock de productos, emite tickets fiscales y es posible
            tomar pedidos con monitores táctiles y/o lectores de código de
            barras. Permite administrar eficientemente un negocio tomando
            decisiones basadas en información estadística.
          </p>
        </div>

        <div className={style.card} onClick={Col}>
          <div className={style.imgIcon}>
            <Image width={150} height={150} src={logoCol} alt="col"></Image>
          </div>
          <h2 className={style.titleCard}>Control Online</h2>
          <p className={style.text}>
            Sistema web de control online para los sistemas Gastronomico y G1.
            Podra tener acceso a todo lo trabajado en su local de manera remota
            y eficientemente Permitiendo visualizar lo trabajado y realizar
            cambios en los precios directamente desde la web
          </p>
        </div>

        <div className={style.card} onClick={FCE}>
          <div className={style.imgIcon}>
            <Image width={150} height={150} src={logoFce} alt="col"></Image>
          </div>
          <h2 className={style.titleCard}>Facturador Electronico</h2>
          <p className={style.text}>
            Sistema de Facturacion Electronica para los sistemas Gastronomico y
            G1 Permite facturar directamente comunicandose con AFIP y asi poder
            emitir ticket fiscales a sus clientes Permite la visualizacion y la
            exportacion de todos los reportes necesarios como lo es el Libro de
            IVA Ventas
          </p>
        </div>
      </div>

      <div ref={gastronomico}>
        <Landing postLanding={ngLanding}></Landing>
      </div>

      <div ref={check}>
        <Landing postLanding={checkLanding}></Landing>
      </div>

      <div ref={g1}>
        <Landing postLanding={g1Landing}></Landing>
      </div>

      <div ref={col}>
        <Landing postLanding={colLanding}></Landing>
      </div>

      <div ref={fce}>
        <Landing postLanding={fceLanding}></Landing>
      </div>
    </>
  );
};

export default HomePage;
