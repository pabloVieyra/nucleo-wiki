import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import Swal from "sweetalert2";

const CategoriaPrueba = () => {
  const [categorias, setCategorias] = useState([]);

  const formik = useFormik({
    initialValues: {
      Nombre: "",
      Sistema: 1,
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

  const PostCategoria = (values) => {
    axios
      .post("/api/Categorias", {
        nombre: values.Nombre,
        sistema: values.Sistema,
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

  const GetCategoria = () => {
    axios
      .get("/api/Categorias")
      .then((response) => {
        console.log(response.data);
        setCategorias(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    GetCategoria();
  }, [categorias]);

  return (
    <form className="bg-black p-10 blur" onSubmit={formik.handleSubmit}>
      <h1 className="text-white text-4xl"> Categoria</h1>
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
              value={formik.values.Name}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="Sistema"
            >
              Sistema
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                name="Sistema"
                id="Sistema"
                onChange={formik.handleChange}
                value={formik.values.Sistema}
              >
                <option>NG</option>
                <option>G1</option>
                <option>Check</option>
                <option>Fce</option>
                <option>Col</option>
              </select>
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
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
                      Nombre
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Sistema
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categorias.map((categoria) => {
                    return (
                      <tr
                        className="border-b bg-gray-800 boder-gray-900"
                        key={categoria.id}
                      >
                        <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          {categoria.id}
                        </td>
                        <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {categoria.nombre}
                        </td>
                        <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {categoria.sistema}
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
    </form>
  );
};

export default CategoriaPrueba;
