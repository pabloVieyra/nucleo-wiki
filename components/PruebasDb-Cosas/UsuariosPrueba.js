import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";

const UsuariosPrueba = () => {
  const formik = useFormik({
    initialValues: {
      Nombre: "",
      Apellido: "",
      Email: "",
      Clave: "",
      Rol: 1,
    },
    onSubmit: (values) => {
      PostUsuario(values);
    },
  });

  const PostUsuario = (values) => {
    axios
      .post("http://localhost:3000/api/Usuarios", {
        nombre: values.Nombre,
        apellido: values.Apellido,
        email: values.Email,
        clave: values.Clave,
        rol: values.Rol,
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
      <h1 className="text-white text-4xl">UsuariosPrueba</h1>
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
              onChange={formik.handleChange}
              value={formik.values.Nombre}
            ></input>
          </div>

          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="Apellido"
            >
              Apellido
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="Apellido"
              type="text"
              placeholder="Jane"
              onChange={formik.handleChange}
              value={formik.values.Apellido}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="Email"
              type="text"
              placeholder="Jane"
              onChange={formik.handleChange}
              value={formik.values.Email}
            />
          </div>

          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="Clave"
            >
              Clave
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="Clave"
              type="text"
              placeholder="Jane"
              onChange={formik.handleChange}
              value={formik.values.Clave}
            />
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="Rol"
            >
              Rol
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="Rol"
              type="number"
              placeholder="1"
              onChange={formik.handleChange}
              value={formik.values.Rol}
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

export default UsuariosPrueba;
