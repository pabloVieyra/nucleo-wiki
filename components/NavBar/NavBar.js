import React from "react";
import estilos from "./NavBar.module.css";
import logo from '../../public/Images/logo.png'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className={estilos.todo}>
      <div className={estilos.nav}> 
        <div className={estilos.logo}>
          <Image src={logo} alt='logo'></Image>
        </div>

        <ul>
          <li className={`${estilos.NavBar} ${estilos.btn} ${estilos.system} ${estilos.eje}`}>  
            <a href="#"> Sistemas </a>

            <ul className={estilos.menuHorSystem}>

              <li className={`${estilos.btn} ${estilos.ng} ${estilos.menu}`}>
                <a href="#">Gastronómico</a>
                
                <ul className={estilos.menuVerNg}>

                  <li className={`${estilos.btn} ${estilos.menu2} `}>
                    <a href="#">Archivo</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2} `}>
                    <a href="#">Ingredientes</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2} `}>
                    <a href="#">Productos</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2} ${estilos.ventas}`}>
                    <a href="#">Ventas</a>

                    <ul className={`${estilos.subMenuVentas} ${estilos.menuVerNg}` }>

                      <li className={`${estilos.btn} ${estilos.menu3}` }>
                        <a href="#">Clientes</a>
                      </li>
                      <li className={`${estilos.btn} ${estilos.menu3}` }>
                        <a href="#">Cuenta de Clientes</a>
                      </li>
                      <li className={`${estilos.btn} ${estilos.menu3}` }>
                        <a href="#">Salón</a>
                      </li>
                      <li className={`${estilos.btn} ${estilos.menu3}` }>
                        <a href="#">Delivery/Mostrador</a>
                      </li>
                      <li className={`${estilos.btn} ${estilos.menu3}` }>
                        <a href="#">Monitor de Cocina</a>
                      </li>
                      <li className={`${estilos.btn} ${estilos.menu3}` }>
                        <a href="#">Historial de pedidos</a>
                      </li>
                      <li className={`${estilos.btn} ${estilos.menu3}` }>
                        <a href="#">Estadisticas</a>
                      </li>
                      <li className={`${estilos.btn} ${estilos.menu3}` }>
                        <a href="#">Historial de Facturas</a>
                      </li>
                      <li className={`${estilos.btn} ${estilos.menu3}` }>
                        <a href="#">Historial de Notas de Credito</a>
                      </li>
                      <li className={`${estilos.btn} ${estilos.menu3}` }>
                        <a href="#">Libro de IVA Ventas</a>
                      </li>
                    </ul>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2}` }>
                    <a href="#">Compras</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2}` }>
                    <a href="#">Recursos Humanos</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2}` }>
                    <a href="#">Fondos</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2}` }>
                    <a href="#">Gastos</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2}` }>
                    <a href="#">Estadisticas</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2}` }>
                    <a href="#">Auditorias</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2}` }>
                    <a href="#">Impresor Fiscal</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2}` }>
                    <a href="#">Utilidades</a>
                  </li>
                </ul>
              </li>

              <li className={`${estilos.btn} ${estilos.g1} ${estilos.menu}` }>
                <a href="#">G1</a>
              </li>

              <li className={`${estilos.btn} ${estilos.check} ${estilos.menu}` }>
                <a href="#">Check</a>
              </li>

              <li className={`${estilos.btn} ${estilos.col} ${estilos.menu}` }>
                <a href="#">Control Online</a>
              </li>

              <li className={`${estilos.btn} ${estilos.fce} ${estilos.menu}` }>
                <a href="#">Facturacion Electronica</a>
              </li>
            </ul>
          </li>

          <li className={`${estilos.NavBar} ${estilos.btn} ${estilos.contact} ${estilos.eje}` }>  
            <a>Contacto</a>
          </li>

          <li className={`${estilos.perfil} ${estilos.eje}` }></li>
        </ul>
      </div>

    </div>
  );
};

export default NavBar;
