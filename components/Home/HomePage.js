import React from "react";
import style from "./HomePage.module.css";
import logoNg from "../../public/Images/ng.png";
import logoG1 from "../../public/Images/g1.png";
import logoCheck from "../../public/Images/check.png";
import logoCol from "../../public/Images/col.png";
import logoFce from "../../public/Images/fce.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <div className={style.title}>
        <h1>Elegi tu sistema</h1>
      </div>
      <div className={style.sectionCard}>
        <div className={style.card}>
          <div className={style.imgIcon}>
            <Image width={150}
      height={150} src={logoNg} alt="gastronomico"></Image>
          </div>
          <h2 className={style.titleCard}>Gastronómico</h2>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            finibus dolor nec nulla tristique, sed blandit ante vulputate. Duis
            viverra convallis ex, quis lobortis felis commodo vitae. Etiam sit
            amet porttitor urna.
          </p>
        </div>

        <div className={style.card}>
          <div className={style.imgIcon}>
            <Image  width={150}
      height={150} src={logoCheck} alt="check"></Image>
          </div>
          <h2 className={style.titleCard}>Check</h2>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            finibus dolor nec nulla tristique, sed blandit ante vulputate. Duis
            viverra convallis ex, quis lobortis felis commodo vitae. Etiam sit
            amet porttitor urna.
          </p>
        </div>

        <div className={style.card}>
          <div className={style.imgIcon}>
            <Image width={150}
      height={150} src={logoG1} alt="G1"></Image>
          </div>
          <h2 className={style.titleCard}>Gestion 1 G1</h2>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            finibus dolor nec nulla tristique, sed blandit ante vulputate. Duis
            viverra convallis ex, quis lobortis felis commodo vitae. Etiam sit
            amet porttitor urna.
          </p>
        </div>

        <div className={style.card}>
          <div className={style.imgIcon}>
            <Image width={150}
      height={150} src={logoCol} alt="col"></Image>
          </div>
          <h2 className={style.titleCard}>Control Online</h2>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            finibus dolor nec nulla tristique, sed blandit ante vulputate. Duis
            viverra convallis ex, quis lobortis felis commodo vitae. Etiam sit
            amet porttitor urna.
          </p>
        </div>

        <div className={style.card}>
          <div className={style.imgIcon}>
            <Image width={150}
      height={150} src={logoFce} alt="col"></Image>
          </div>
          <h2 className={style.titleCard}>Facturador Electronico</h2>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            finibus dolor nec nulla tristique, sed blandit ante vulputate. Duis
            viverra convallis ex, quis lobortis felis commodo vitae. Etiam sit
            amet porttitor urna.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
