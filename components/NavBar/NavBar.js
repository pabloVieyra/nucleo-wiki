import React from "react";
import estilos from "./NavBar.module.css";
import logo from "../../public/Images/logo.png";
import perfil from "../../public/Images/perfil.png";
import Image from "next/image";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Link from "next/link";

const NavBar = () => {
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
            { id: 4, text: "Delivery Mostrador" },
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
        {
          id: 6,
          text: "RR HH",
          id: [
            { id: 1, text: "Mozos" },
            { id: 2, text: "Repartidores" },
            { id: 3, text: "Multifuncionales" },
            { id: 4, text: "Asistencias" },
            { id: 5, text: "Sueldos" },
          ],
        },
        {
          id: 7,
          text: "Fondos",
          id: [
            { id: 1, text: "Cheques" },
            { id: 2, text: "Caja" },
          ],
        },
        {
          id: 8,
          text: "Gastos",
          id: [
            { id: 1, text: "Gastos Realizados" },
            { id: 2, text: "Realizar un Gasto" },
          ],
        },
        {
          id: 9,
          text: "Estadisticas",
          id: [
            { id: 1, text: "Pedidos por Producto" },
            { id: 2, text: "Pedidos por Cliente" },
            { id: 3, text: "Pedidos por Mozo" },
            { id: 4, text: "Analisis de Salon" },
            { id: 5, text: "Resumen de Comercio" },
            { id: 6, text: "Forma de Pago de Pedidos" },
            { id: 7, text: "Cobranza con Tarjeta" },
          ],
        },
        {
          id: 10,
          text: "Sincronizacion",
          id: [
            { id: 1, text: "Historial de Sincronizacion" },
            { id: 2, text: "Ver Reportes" },
          ],
        },
        {
          id: 11,
          text: "Auditoria",
          id: [
            { id: 1, text: "Salon" },
            { id: 2, text: "Delivery" },
            { id: 3, text: "Pedidos Anulados" },
            { id: 4, text: "Forma de Pago" },
          ],
        },
        {
          id: 12,
          text: "Impresor Fiscal",
          id: [
            { id: 1, text: "Cierre X" },
            { id: 2, text: "Cierre Z" },
            { id: 3, text: "Consultar Cierre Z" },
            { id: 4, text: "Configuracion" },
          ],
        },
        {
          id: 13,
          text: "Utilidades",
          id: [
            { id: 1, text: "Envio de NewsLetters" },
            { id: 2, text: "Back-Up" },
            { id: 3, text: "Logs" },
            { id: 4, text: "Historial de Facturas Realizadas" },
            { id: 5, text: "Correccion de Datos" },
            { id: 6, text: "Calculadora" },
            { id: 7, text: "Calendario" },
            { id: 8, text: "ShowMyPc" },
            { id: 9, text: "Planillas de Importacion" },
          ],
        },
        {
          id: 14,
          text: "Ayuda",
          id: [
            { id: 1, text: "Manual" },
            { id: 2, text: "Licencia de Uso" },
            { id: 3, text: "Chat de Soporte" },
            { id: 4, text: "Acerca De" },
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
        {
          id: 6,
          text: "RR HH",
          id: [
            { id: 1, text: "Mozos" },
            { id: 2, text: "Repartidores" },
            { id: 3, text: "Multifuncionales" },
            { id: 4, text: "Asistencias" },
            { id: 5, text: "Sueldos" },
          ],
        },
        {
          id: 7,
          text: "Fondos",
          id: [
            { id: 1, text: "Cheques" },
            { id: 2, text: "Caja" },
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
            { id: 4, text: "Delivery Mostrador" },
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
        {
          id: 6,
          text: "RR HH",
          id: [
            { id: 1, text: "Mozos" },
            { id: 2, text: "Repartidores" },
            { id: 3, text: "Multifuncionales" },
            { id: 4, text: "Asistencias" },
            { id: 5, text: "Sueldos" },
          ],
        },
        {
          id: 7,
          text: "Fondos",
          id: [
            { id: 1, text: "Cheques" },
            { id: 2, text: "Caja" },
          ],
        },
        {
          id: 8,
          text: "Gastos",
          id: [
            { id: 1, text: "Gastos Realizados" },
            { id: 2, text: "Realizar un Gasto" },
          ],
        },
        {
          id: 9,
          text: "Estadisticas",
          id: [
            { id: 1, text: "Pedidos por Producto" },
            { id: 2, text: "Pedidos por Cliente" },
            { id: 3, text: "Pedidos por Mozo" },
            { id: 4, text: "Analisis de Salon" },
            { id: 5, text: "Resumen de Comercio" },
            { id: 6, text: "Forma de Pago de Pedidos" },
            { id: 7, text: "Cobranza con Tarjeta" },
          ],
        },
        {
          id: 10,
          text: "Sincronizacion",
          id: [
            { id: 1, text: "Historial de Sincronizacion" },
            { id: 2, text: "Ver Reportes" },
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
          text: "Ventas",
          id: [
            { id: 1, text: "Historial de Pedidos" },
            { id: 2, text: "Resumen de Comercio" },
            { id: 3, text: "Libro IVA Ventas" },
            { id: 4, text: "Estado de Salon" },
            { id: 5, text: "Pedidos Pendientes" },
            { id: 6, text: "Forma de Pago de Pedidos" },
          ],
        },
        {
          id: 2,
          text: "Compras",
          id: [
            { id: 1, text: "Pedidos de Compra por Proveedor" },
            { id: 2, text: "Historial de Compra" },
            { id: 3, text: "Pedido de Compras por Item" },
            { id: 4, text: "Libro de IVA Compras" },
          ],
        },
        {
          id: 3,
          text: "Menu",
          id: [
            { id: 1, text: "Carta de Productos" },
            { id: 2, text: "Stock de Productos" },
            { id: 3, text: "Movimiento de Stock de Productos" },
            { id: 4, text: "Stock de Ingredientes" },
            { id: 5, text: "Movimiento de Stock de Ingredientes" },
          ],
        },
        {
          id: 4,
          text: "Gastos",
          id: [{ id: 1, text: "Historial de Gastos" }],
        },
        {
          id: 5,
          text: "Fondos",
          id: [
            { id: 1, text: "Movimientos Manuales de Caja" },
            { id: 2, text: "Cierres de Caja" },
            { id: 3, text: "Cajas Adicionales" },
          ],
        },
        {
          id: 6,
          text: "Auditoria",
          id: [
            { id: 1, text: "Auditoria de Pedidos Anulados" },
            { id: 2, text: "Auditoria del Salon" },
            { id: 3, text: "Auditoria del Delivery" },
            { id: 4, text: "Historial de Precios y Costos" },
          ],
        },
        {
          id: 7,
          text: "Asistencias",
          id: [{ id: 1, text: "Historial de Asistencias" }],
        },
      ],
    },
    {
      id: 5,
      text: "Facturador",
      id: [
        {
          id: 1,
          text: "FCE1",
          id: [
            { id: 1, text: "Historial de Pedidos" },
            { id: 2, text: "Resumen de Comercio" },
            { id: 3, text: "Libro IVA Ventas" },
          ],
        },
        {
          id: 2,
          text: "FCE 2",
          id: [
            { id: 1, text: "Pedidos de Compra por Proveedor" },
            { id: 2, text: "Historial de Compra" },
            { id: 3, text: "Pedido de Compras por Item" },
            { id: 4, text: "Libro de IVA Compras" },
          ],
        },
        {
          id: 3,
          text: "MOTOMAMI",
          id: [
            { id: 1, text: "Carta de Productos" },
            { id: 2, text: "Stock de Productos" },
            { id: 3, text: "Movimiento de Stock de Productos" },
            { id: 4, text: "Stock de Ingredientes" },
            { id: 5, text: "Movimiento de Stock de Ingredientes" },
          ],
        },
        {
          id: 4,
          text: "kikeeeeeeE",
          id: [{ id: 1, text: "Historial de Gastos" }],
        },
        {
          id: 5,
          text: "Fondos",
          id: [
            { id: 1, text: "Movimientos Manuales de Caja" },
            { id: 2, text: "Cierres de Caja" },
            { id: 3, text: "Cajas Adicionales" },
          ],
        },
        {
          id: 6,
          text: "Auditoria",
          id: [
            { id: 1, text: "Auditoria de Pedidos Anulados" },
            { id: 2, text: "Auditoria del Salon" },
            { id: 3, text: "Auditoria del Delivery" },
            { id: 4, text: "Historial de Precios y Costos" },
          ],
        },
        {
          id: 7,
          text: "Asistencias",
          id: [{ id: 1, text: "Historial de Asistencias" }],
        },
      ],
    },
  ];

  const [clicked, setClicked] = useState(false);

  const [hover, setHover] = useState(false);

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
              {System.map((menu) => {
                return (
                  <>
                    <li
                      onMouseEnter={() => setHover((current) => !current)}
                      onMouseLeave={() => setHover((current) => !current)}
                      className={`${estilos.btn} ${estilos.btnCenter} ${estilos.selected2}`}
                    >
                      <a href="#" key={menu.id}>
                        {menu.text}
                      </a>

                      <ul className={`${estilos.menuVer} ${estilos.menu2}`}>
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
                                  className={`${estilos.subMenu} ${estilos.menuVer} ${estilos.menu3}`}
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
