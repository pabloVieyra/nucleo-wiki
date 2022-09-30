import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import Swal from "sweetalert2";

const FavoritosPrueba = () => {
  const [favoritos, setFavoritos] = useState([]);

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

  const GetFavoritos = () => {
    axios
      .get("http://localhost:3000/api/Favoritos")
      .then((response) => {
        console.log(response.data);
        setFavoritos(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    GetFavoritos();
  }, [favoritos]);

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

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center border-b bg-blue-100 border-blue-200">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      post_id
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      usuario_id
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {favoritos.map((favorito) => {
                    return (
                      <tr
                        className="border-b bg-gray-800 boder-gray-900"
                        key={favorito.id}
                      >
                        <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          {favorito.id}
                        </td>
                        <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          {favorito.post_id}
                        </td>
                        <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {favorito.usuario_id}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritosPrueba;
