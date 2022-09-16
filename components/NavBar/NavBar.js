import React from "react";
import estilos from "./NavBar.module.css";
import logo from "../../public/Images/logo.png";
import perfil from "../../public/Images/perfil.png";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  /*function clickMenu() {
    document.getElementsByClassName("menu").style = "display: flex";
  }*/

  const menuArchivo = [
    { id: 1, text: "Empresas de Tarjetas" },
    { id: 2, text: "Tipos de Descuento" },
    { id: 3, text: "Sucursal" },
    { id: 4, text: "Canal de Venta" },
    { id: 5, text: "Usuarios" },
    { id: 6, text: "Configuracion del Sistema" },
  ];

  const menuIngredientes = [
    { id: 1, text: "Unidades de Medida" },
    { id: 2, text: "Ingredientes" },
    { id: 3, text: "Stock de Ingredientes" },
  ];

  const menuProductos = [
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
  ];

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
    { id: 7, text: "Historial de Facturas" },
    { id: 8, text: "Monitor de NC" },
    { id: 9, text: "Libro de IVA Ventas" },
  ];

  return (
    <div className={estilos.todo}>
      <div className={estilos.nav}>
        <div className={estilos.logo}>
          <Link href="/">
            <Image src={logo} alt="logo"></Image>
          </Link>
        </div>

        <ul>
          <li
            className={`${estilos.NavBar} ${estilos.btn} ${estilos.selected1} ${estilos.eje}`}
          >
            <a href="#" /*onClick={clickMenu}*/ className={estilos.fijo}>
              {" "}
              Sistemas{" "}
            </a>

            <ul className={`${estilos.menuHorSystem} ${estilos.menu}`}>
              <li className={`${estilos.btn} ${estilos.selected2}`}>
                <a href="#">Gastronómico</a>

                <ul className={`${estilos.menuVerNg} ${estilos.menu2} `}>
                  <li className={`${estilos.btn} ${estilos.selected3}`}>
                    <a href="#">Archivo</a>

                    <ul
                      className={`${estilos.subMenuVentas} ${estilos.menuVerNg} ${estilos.menu3}`}
                    >
                      {menuArchivo.map((menu) => {
                        return (
                          <>
                            <li className={`${estilos.btn}`}>
                              <a href="#" key={menu.id}>
                                {menu.text}
                              </a>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </li>

                  <li className={`${estilos.btn} ${estilos.selected3}`}>
                    <a href="#">Ingredientes</a>

                    <ul
                      className={`${estilos.subMenuVentas} ${estilos.menuVerNg} ${estilos.menu3}`}
                    >
                      {menuIngredientes.map((menu) => {
                        return (
                          <>
                            <li className={`${estilos.btn}`}>
                              <a href="#" key={menu.id}>
                                {menu.text}
                              </a>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </li>

                  <li className={`${estilos.btn} ${estilos.selected3}`}>
                    <a href="#">Productos</a>

                    <ul
                      className={`${estilos.subMenuVentas} ${estilos.menuVerNg} ${estilos.menu3}`}
                    >
                      {menuProductos.map((menu) => {
                        return (
                          <>
                            <li className={`${estilos.btn}`}>
                              <a href="#" key={menu.id}>
                                {menu.text}
                              </a>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </li>

                  <li className={`${estilos.btn} ${estilos.selected3}`}>
                    <a href="#">Ventas</a>

                    <ul
                      className={`${estilos.subMenuVentas} ${estilos.menuVerNg} ${estilos.menu3}`}
                    >
                      {menuVentas.map((menu) => {
                        return (
                          <>
                            <li className={`${estilos.btn}`}>
                              <a href="#" key={menu.id}>
                                {menu.text}
                              </a>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </li>

                  <li className={`${estilos.btn} ${estilos.selected3}`}>
                    <a href="#">Compras</a>

                    <ul
                      className={`${estilos.subMenuVentas} ${estilos.menuVerNg} ${estilos.menu3}`}
                    >
                      {menuCompras.map((menu) => {
                        return (
                          <>
                            <li className={`${estilos.btn}`}>
                              <a href="#" key={menu.id}>
                                {menu.text}
                              </a>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2}`}>
                    <a href="#">Recursos Humanos</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2}`}>
                    <a href="#">Fondos</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2}`}>
                    <a href="#">Gastos</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2}`}>
                    <a href="#">Estadisticas</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2}`}>
                    <a href="#">Auditorias</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2}`}>
                    <a href="#">Impresor Fiscal</a>
                  </li>

                  <li className={`${estilos.btn} ${estilos.menu2}`}>
                    <a href="#">Utilidades</a>
                  </li>
                </ul>
              </li>

              <li className={`${estilos.btn} ${estilos.g1} ${estilos.menu}`}>
                <a href="#">G1</a>
              </li>

              <li className={`${estilos.btn} ${estilos.check} ${estilos.menu}`}>
                <a href="#">Check</a>
              </li>

              <li className={`${estilos.btn} ${estilos.col} ${estilos.menu}`}>
                <a href="#">Control Online</a>
              </li>

              <li className={`${estilos.btn} ${estilos.fce} ${estilos.menu}`}>
                <a href="#">Facturacion</a>
              </li>
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
            <Image src={perfil} alt="perfil"></Image>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
