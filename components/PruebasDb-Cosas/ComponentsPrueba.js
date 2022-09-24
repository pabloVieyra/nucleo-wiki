import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";

const ComponentsPrueba = () => {
  const formik = useFormik({
    initialValues: {
      Tipo: 1,
      Valor: "",
      Orden: 1,
      Post_id: 1,
    },
    onSubmit: (values) => {
      PostComponent(values);
    },
  });

  const PostComponent = (values) => {
    axios
      .post("http://localhost:3000/api/Componentes", {
        tipo: values.Tipo,
        valor: values.Valor,
        orden: values.Orden,
        post_id: values.Post_id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-black p-10 blur">
      <h1 className="text-white text-4xl"> Components</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex  flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="Tipo"
            >
              Tipo
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="Tipo"
              type="number"
              placeholder="Jane"
              onChange={formik.handleChange}
              value={formik.values.Tipo}
            />
          </div>

          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="Valor"
            >
              Valor
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="Valor"
              type="text"
              placeholder="Jane"
              onChange={formik.handleChange}
              value={formik.values.Valor}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="Orden"
            >
              Orden
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="Orden"
              type="number"
              placeholder="Jane"
              onChange={formik.handleChange}
              value={formik.values.Orden}
            />
          </div>

          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="Post_id"
            >
              Post_id
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="Post_id"
              type="number"
              placeholder="Jane"
              onChange={formik.handleChange}
              value={formik.values.Post_id}
            />
          </div>
        </div>
      </div>
      <button
        onClick={formik.handleSubmit}
        className="mt-3 font-semibold leading-none text-white py-5 px-5 bg-gradient-to-r from-green-500 to-blue-500 rounded rounded-full"
      >
        enviar a la dev
      </button>
    </div>
  );
};

export default ComponentsPrueba;
