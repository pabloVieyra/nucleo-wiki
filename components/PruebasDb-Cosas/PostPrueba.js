import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";

const PostPrueba = () => {
  const changeComponent = () => {
    fetch(`http://localhost:3000/api/componentes/`)
      .then((response) => response.json())
      .then((response) => {
        const filtrado = response.filter((r) => r.tags == e);
        setProducts(filtrado);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      Nombre: "",
      Categorias_id: 1,
      Sistema: "",
      Visitas: "",
      Valoraciones: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      switch (values.Sistema) {
        case "NG":
          values.Sistema = 1;
          break;
        case "G1":
          values.Sistema = 2;
          break;
        case "Check":
          values.Sistema = 3;
          break;
        case "Fce":
          values.Sistema = 4;
          break;
        case "Col":
          values.Sistema = 5;
          break;
      }
      PostCategoria(values);
    },
  });

  return (
    <form className="bg-black p-10 blur" onSubmit={formik.handleSubmit}>
      <h1 className="text-white text-4xl">PostPrueba</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex  flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="Nombre"
            >
              Nombre
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="Nombre"
              type="text"
              placeholder="Jane"
            />
          </div>

          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="Categorias_Id"
            >
              Categorias_Id
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="Categorias_Id"
              type="text"
              placeholder="Jane"
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="Sistema"
            >
              Sistema
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="Sistema"
              type="text"
              placeholder="Jane"
            />
          </div>

          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="Visitas"
            >
              Visitas
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="Visitas"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="Valoraciones"
            >
              Valoraciones
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="Valoraciones"
              type="text"
              placeholder="Jane"
            />
          </div>
        </div>
      </div>
      <button
        onClick={changeComponent}
        className="mt-3 font-semibold leading-none text-white py-5 px-5 bg-gradient-to-r from-green-500 to-blue-500 rounded rounded-full"
      >
        enviar a la dev
      </button>
    </form>
  );
};

export default PostPrueba;
