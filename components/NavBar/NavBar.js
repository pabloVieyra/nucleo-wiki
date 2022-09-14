import React from "react";
import estilos from "./NavBar.module.css";
import logo from "../../public/Images/logo.png";
import perfil from "../../public/Images/perfil.png";
import Image from "next/image";

const NavBar = () => {
  /*function clickMenu() {
    document.getElementsByClassName("menu").style = "display: flex";
  }*/

  const System = [
    {
      id: 1,
      text: "Gastronomico",
      id: [
        {
          id: 1,
          text: "Archivo",
          id: [
            { id: 1, text: "Empresas de Tarjetas" },
            { id: 2, text: "Tipos de Descuento" },
            { id: 3, text: "Sucursal" },
            { id: 4, text: "Canal de Venta" },
            { id: 5, text: "Usuarios" },
            { id: 6, text: "Configuracion del Sistema" },
          ],
        },
        {
          id: 2,
          text: "Ingredientes",
          id: [
            { id: 1, text: "Unidades de Medida" },
            { id: 2, text: "Ingredientes" },
            { id: 3, text: "Stock de Ingredientes" },
          ],
        },
        {
          id: 3,
          text: "Carta de Productos",
          id: [
            { id: 1, text: "Rubro de Productos" },
            { id: 2, text: "SubRubro de Productos" },
            { id: 3, text: "Observaciones" },
            { id: 4, text: "Productos" },
            { id: 5, text: "Lista de Precios" },
            { id: 6, text: "Plantilla de Recetas" },
            { id: 7, text: "Empanadas" },
            { id: 8, text: "Pizzas" },
            { id: 9, text: "Stock de Productos" },
            { id: 10, text: "Movimiento de Stock" },
            { id: 11, text: "Inventario" },
            { id: 12, text: "Producto Favorito" },
            { id: 13, text: "Promociones" },
            { id: 14, text: "Grupo de Productos" },
            { id: 12, text: "Orden de Produccion" },
            { id: 13, text: "Envio de Mercaderia" },
            { id: 14, text: "Recepcion de Mercaderia" },
          ],
        },
        {
          id: 4,
          text: "Ventas",
          id: [
            { id: 1, text: "Clientes" },
            { id: 2, text: "Cuenta de Clientes" },
            { id: 3, text: "Salon" },
            { id: 4, text: "Delivery/Mostrador" },
            { id: 5, text: "Monitor de Cocina" },
            { id: 6, text: "Historial de Pedidos" },
            { id: 7, text: "Historial de Facturas" },
            { id: 8, text: "Monitor de NC" },
            { id: 9, text: "Libro de IVA Ventas" },
          ],
        },
        {
          id: 5,
          text: "Compras",
          id: [
            { id: 1, text: "Proveedores" },
            { id: 2, text: "Insumos" },
            { id: 3, text: "Servicios" },
            { id: 4, text: "Ordenes de Compra" },
            { id: 5, text: "Historial de Facturas" },
            { id: 6, text: "Historial de NC" },
            { id: 7, text: "Libro de IVA Compras" },
          ],
        },
      ],
    },
    {
      id: 2,
      text: "Check",
      id: [
        {
          id: 1,
          text: "Archivo",
          id: [
            { id: 1, text: "Empresas de Tarjetas" },
            { id: 2, text: "Tipos de Descuento" },
            { id: 3, text: "Sucursal" },
            { id: 4, text: "Canal de Venta" },
            { id: 5, text: "Usuarios" },
            { id: 6, text: "Configuracion del Sistema" },
          ],
        },
      ],
    },
    {
      id: 3,
      text: "G1",
      id: [
        {
          id: 1,
          text: "Archivo",
          id: [
            { id: 1, text: "Empresas de Tarjetas" },
            { id: 2, text: "Tipos de Descuento" },
            { id: 3, text: "Sucursal" },
            { id: 4, text: "Canal de Venta" },
            { id: 5, text: "Usuarios" },
            { id: 6, text: "Configuracion del Sistema" },
          ],
        },
      ],
    },
    {
      id: 4,
      text: "Control Online",
      id: [
        {
          id: 1,
          text: "Archivo",
          id: [
            { id: 1, text: "Empresas de Tarjetas" },
            { id: 2, text: "Tipos de Descuento" },
            { id: 3, text: "Sucursal" },
            { id: 4, text: "Canal de Venta" },
            { id: 5, text: "Usuarios" },
            { id: 6, text: "Configuracion del Sistema" },
          ],
        },
      ],
    },
  ];

  return (
    <div className={estilos.todo}>
      <div className={estilos.nav}>
        <div className={estilos.logo}>
          <Image src={logo} alt="logo"></Image>
        </div>

        <ul>
          <li
            className={`${estilos.NavBar} ${estilos.btn} ${estilos.selected1} ${estilos.eje}`}
          >
            <a href="#" /*onClick={clickMenu}*/ className={estilos.fijo}>
              {" "}
              Sistemas
            </a>

            <ul className={`${estilos.menuHorSystem} ${estilos.menu}`}>
              {System.map((menu) => {
                return (
                  <>
                    <li className={`${estilos.btn} ${estilos.selected2}`}>
                      <a href="#" key={menu.id}>
                        {menu.text}
                      </a>

                      <ul className={`${estilos.menuVerNg} ${estilos.menu2} `}>
                        {menu.id.map((submenu) => {
                          return (
                            <>
                              <li
                                className={`${estilos.btn} ${estilos.selected3}`}
                              >
                                <a href="#" key={submenu.id}>
                                  {submenu.text}
                                </a>
                                <ul
                                  className={`${estilos.subMenuVentas} ${estilos.menuVerNg} ${estilos.menu3}`}
                                >
                                  {submenu.id.map((submenusub) => {
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

          <li
            className={`${estilos.NavBar} ${estilos.btn} ${estilos.contact} ${estilos.eje}`}
          >
            <a>Contacto</a>
          </li>

          <li className={`${estilos.perfil} ${estilos.eje}`}>
            <Image src={perfil} alt="perfil"></Image>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
