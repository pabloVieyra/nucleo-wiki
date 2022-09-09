import React from "react";
import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
        <div className={style.section}>

        <div className={style.iconContainer}>

            <div className={style.icoContainerInner}>

                <div className={(style.iconFront,style.ngImg)}></div>

                    <div className={style.iconBack}>

                    <h1 className={style.iconText}>Sistema  Gastronómico</h1>

                </div>

             </div>

         </div>

        <div className={style.iconContainer}>

            <div className={style.iconContainerInner}>

                <div className={(style.iconFront,style.checkImg)}></div>

                    <div className={style.iconBack}>
                        
                    <h1 className={style.iconText}>Sistema Check</h1>
                            
                </div>

            </div>

        </div>

        <div className={style.iconContainer}>

            <div className={style.iconContainerInner}>

                <div className={(style.iconFront,style.g1Img)}></div>

                    <div className={style.iconBack}>
                                
                    <h1 className={style.iconText}>Sistema G1</h1>
        
                </div>

            </div>

        </div>

        <div className={style.iconContainer}>

            <div className={style.iconContainerInner}>

                <div className={(style.iconFront,style.colImg)}></div>

                    <div className={style.iconBack}>
                    
                    <h1 className={style.iconText}>Control Online</h1>
                
                </div>

            </div>

        </div>
        
        </div>
    </>
  );
};

export default HomePage;