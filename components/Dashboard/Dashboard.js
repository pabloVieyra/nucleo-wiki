import React from "react";
import estilos from "./Dashboard.module.css";
import Image from 'next/image';
import logocol from '../../public/Images/col.png';
/* import logo1 from './public/Images/col.png';
import logong from "./public/Images/";
import logog1 from './public/Images/';
import logochk from '../../public/Images/logo.png';
import logofce from '../../public/Images/logo.png'; */

const Dashboard = () => {
return (
    
        <nav className={estilos.contenedor}>
            <div className={estilos.contenedor2}>
                <ul>
                    <li className={estilos.logoNucleo}>
                        <div className={estilos.logo1}></div>
                    </li>

                    <li className={estilos.dropLista}><a href="#">HOLA</a>
                        <ul>
                            <li><a href="#">Crear</a></li>
                            <li><a href="#">Modificar</a></li>
                            <li><a href="#">Borrrar</a></li>
                            <li><a href="#">Ejemplo</a></li>
                        </ul>
                    </li>

                    <li className={estilos.dropLista}><a href="#">HOLA</a>
                        <ul>
                            <li><a href="#">Crear</a></li>
                            <li><a href="#">Modificar</a></li>
                            <li><a href="#">Borrrar</a></li>
                            <li><a href="#">Ejemplo</a></li>
                        </ul>
                    </li>

                    <li className={estilos.dropLista}><a href="#">HOLA</a>
                        <ul>
                            <li><a href="#">Crear</a></li>
                            <li><a href="#">Modificar</a></li>
                            <li><a href="#">Borrrar</a></li>
                            <li><a href="#">Ejemplo</a></li>
                        </ul>
                    </li>

                    <li className={estilos.dropLista}><a href="#">HOLA</a>
                        <ul>
                            <li><a href="#">Crear</a></li>
                            <li><a href="#">Modificar</a></li>
                            <li><a href="#">Borrrar</a></li>
                            <li><a href="#">Ejemplo</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </nav>
    
);
};

export default Dashboard;
