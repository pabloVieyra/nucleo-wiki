import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import Swal from "sweetalert2";

const FavoritosPrueba = () => {
  const formik = useFormik({
    initialValues: {
      Post_Id: 1,
      User_Id: 1,
    },
    onSubmit: (values) => {
      PostFavoritos(values);
    },
  });

  const PostFavoritos = (values) => {
    axios
      .post("http://localhost:3000/api/Favoritos", {
        post_id: values.Post_Id,
        usuario_id: values.User_Id,
      })
      .then(function (response) {
        console.log(response);
        Swal.fire("Good job! Aprobado", response.statusText, "success");
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire("Error!", error.response.data.error, "error");
      });
  };

  return (
    <div className="bg-black p-10 blur">
      <h1 className="text-white text-4xl">FavoritosPrueba </h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex  flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="Post_Id"
            >
              Post_Id
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="Post_Id"
              type="number"
              placeholder="Jane"
              onChange={formik.handleChange}
              value={formik.values.Post_Id}
            />
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="User_Id"
            >
              User_Id
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="User_Id"
              type="number"
              placeholder="Jane"
              onChange={formik.handleChange}
              value={formik.values.User_Id}
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

export default FavoritosPrueba;
