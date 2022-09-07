import React from "react";
import estilos from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <div className="">
        <div className=""></div>

        <ul>
          <li className="">
            <a href="#"> Sistemas </a>

            <ul className="">
              <li className="">
                <a href="#">Gastronómico</a>

                <ul className="menu--ver--ng">
                  <li className="">
                    <a href="#">Archivo</a>
                  </li>

                  <li className="">
                    <a href="#">Ingredientes</a>
                  </li>

                  <li className="">
                    <a href="#">Productos</a>
                  </li>

                  <li className="btn menu2 ventas">
                    <a href="#">Ventas</a>
                    <ul className="">
                      <li className="">
                        <a href="#">Clientes</a>
                      </li>
                      <li className="">
                        <a href="#">Cuenta de Clientes</a>
                      </li>
                      <li className="">
                        <a href="#">Salón</a>
                      </li>
                      <li className="">
                        <a href="#">Delivery/Mostrador</a>
                      </li>
                      <li className="">
                        <a href="#">Monitor de Cocina</a>
                      </li>
                      <li className="">
                        <a href="#">Historial de pedidos</a>
                      </li>
                      <li className="">
                        <a href="#">Estadisticas</a>
                      </li>
                      <li className="">
                        <a href="#">Historial de Facturas</a>
                      </li>
                      <li className="">
                        <a href="#">Historial de Notas de Credito</a>
                      </li>
                      <li className="">
                        <a href="#">Libro de IVA Ventas</a>
                      </li>
                    </ul>
                  </li>

                  <li className="">
                    <a href="#">Compras</a>
                  </li>

                  <li className="">
                    <a href="#">Recursos Humanos</a>
                  </li>

                  <li className="">
                    <a href="#">Fondos</a>
                  </li>

                  <li className="">
                    <a href="#">Gastos</a>
                  </li>

                  <li className="">
                    <a href="#">Estadisticas</a>
                  </li>

                  <li className="">
                    <a href="#">Auditorias</a>
                  </li>

                  <li className="">
                    <a href="#">Impresor Fiscal</a>
                  </li>

                  <li className="">
                    <a href="#">Utilidades</a>
                  </li>
                </ul>
              </li>

              <li className="btn g1 menu">
                <a href="#">G1</a>
              </li>

              <li className="btn check menu">
                <a href="#">Check</a>
              </li>

              <li className="btn col menu">
                <a href="#">Control Online</a>
              </li>

              <li className="btn fce menu">
                <a href="#">Facturacion Electronica</a>
              </li>
            </ul>
          </li>

          <li className="container btn contact">
            <a>Contacto</a>
          </li>

          <li className="perfil"></li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
