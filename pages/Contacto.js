import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import Formulario from "../components/Formulario/Formulario";

const Contacto = () => {
  return (
    <div className=" w-full  bg-secundary ">
      <Formulario></Formulario>
    </div>
  );
};

Contacto.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default Contacto;
