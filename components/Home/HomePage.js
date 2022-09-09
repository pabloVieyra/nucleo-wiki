import React from "react";
import style from "./HomePage.module.css";
import logoNg from "../../public/Images/ng.png";
import logoG1 from "../../public/Images/g1.png";
import logoCheck from "../../public/Images/check.png";
import logoCol from "../../public/Images/col.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <div className={style.contain}>
        <div className={style.section}>
          <div className={style.iconContainer}>
            <div className={style.iconContainerInner}>
              <div className={style.iconFront}>
                <div className={style.imgIcon}>
                  <Image src={logoNg} alt="gastronomico"></Image>
                </div>
              </div>

              <div className={style.iconBack}>
                <h1 className={style.iconText}>Núcleo Gastronómico</h1>
              </div>
            </div>
          </div>

          <div className={style.iconContainer}>
            <div className={style.iconContainerInner}>
              <div className={style.iconFront}>
                <div className={style.imgIcon}>
                  <Image src={logoCheck} alt="check"></Image>
                </div>
              </div>

              <div className={style.iconBack}>
                <h1 className={style.iconText}>Núcleo Check</h1>
              </div>
            </div>
          </div>

          <div className={style.iconContainer}>
            <div className={style.iconContainerInner}>
              <div className={style.iconFront}>
                <div className={style.imgIcon}>
                  <Image src={logoG1} alt="G1"></Image>
                </div>
              </div>

              <div className={style.iconBack}>
                <h1 className={style.iconText}>Núcleo G1</h1>
              </div>
            </div>
          </div>

          <div className={style.iconContainer}>
            <div className={style.iconContainerInner}>
              <div className={style.iconFront}>
                <div className={style.imgIcon}>
                  <Image src={logoCol} alt="col"></Image>
                </div>
              </div>

              <div className={style.iconBack}>
                <h1 className={style.iconText}>Control Online</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
