import React from "react";
import estilos from "./NavBar.module.css";
import logo from '../../public/Images/logo.png';
import perfil from '../../public/Images/perfil.png';
import Image from 'next/image';



const NavBar = () => {

  const menuCompras = [
    { id: 1, text: "Proveedores" },
    { id: 2, text: "Insumos" },
    { id: 3, text: "Servicios" },
    { id: 4, text: "Ordenes de Compra" },
    { id: 5, text: "Historial de Facturas" },
    { id: 6, text: "Historial de NC" },
    { id: 7, text: "Libro de IVA Compras" },
    ];  

  const menuVentas = [
    { id: 1, text: "Clientes" },
    { id: 2, text: "Cuenta de Clientes" },
    { id: 3, text: "Salon" },
    { id: 4, text: "Delivery/Mostrador" },
    { id: 5, text: "Monitor de Cocina" },
    { id: 6, text: "Historial de Pedidos" },
    { id: 6, text: "Historial de Facturas" },
    { id: 5, text: "Monitor de NC" },
    { id: 6, text: "Libro de IVA Ventas" },
    ];  
/*function clickMenu() {
    document.getElementsByClassName("menu")[0].style.display = "flex";
  }*/ 
    
  return (


    <div className={estilos.todo}>
      <div className={estilos.nav}> 
        <div className={estilos.logo}>
          <Image src={logo} alt='logo'></Image>
        </div>

        <ul>
          <li className={`${estilos.NavBar} ${estilos.btn} ${estilos.system} ${estilos.eje}`}>  
            <button href="#" /*onClick={clickMenu}*/ className={estilos.fijo}> Sistemas </button>

            

            <ul className={`${estilos.menuHorSystem} ${estilos.menu}`}>
              
          

              <li className={`${estilos.btn} ${estilos.ng}`}>
                <a href="#">Gastronómico</a>
                
                <ul className={`${estilos.menuVerNg} ${estilos.menu2} `}>

                  <li className={`${estilos.btn}`}>
                    <a href="#">Archivo</a>
                  </li>

                  <li className={`${estilos.btn}`}>
                    <a href="#">Ingredientes</a>
                  </li>

                  <li className={`${estilos.btn}`}>
                    <a href="#">Productos</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.ventas}` }>
                    <a href="#">Ventas</a>

                      <ul className={`${estilos.subMenuVentas} ${estilos.menuVerNg} ${estilos.menu3}` }>
                          {menuVentas.map(menu => {
                            return (<>
                              <li className={`${estilos.btn}` }>
                                <a href="#" key={menu.id}>
                                  {menu.text}
                                </a>
                            </li>
                            </>)
                          })}
                          
                      </ul> 
                  </li>

                 

                  <li className={`${estilos.btn} ${estilos.ventas}` }>
                    <a href="#">Compras</a>

                      <ul className={`${estilos.subMenuVentas} ${estilos.menuVerNg} ${estilos.menu3}` }>
                          {menuCompras.map(menu => {
                            return (<>
                              <li className={`${estilos.btn}` }>
                                <a href="#" key={menu.id}>
                                  {menu.text}
                                </a>
                            </li>
                            </>)
                          })}
                          
                      </ul> 
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

          <li className={`${estilos.perfil} ${estilos.eje}` }>
           <Image src={perfil} alt='perfil'></Image>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default NavBar;
