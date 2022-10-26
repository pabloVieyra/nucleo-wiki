import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import Swal from "sweetalert2";

const UsuariosPrueba = () => {
  const [usuarios, setUsuarios] = useState([]);

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
      .post("/api/Usuarios", {
        nombre: values.Nombre,
        apellido: values.Apellido,
        email: values.Email,
        clave: values.Clave,
        rol: values.Rol,
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

  const GetUsuarios = () => {
    axios
      .get("/api/Usuarios")
      .then((response) => {
        console.log(response.data);
        setUsuarios(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    GetUsuarios();
  }, [usuarios]);

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
                      apellido
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      clave
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      rol
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((usuario) => {
                    return (
                      <tr
                        className="border-b bg-gray-800 boder-gray-900"
                        key={usuario.id}
                      >
                        <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          {usuario.id}
                        </td>
                        <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {usuario.nombre}
                        </td>
                        <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {usuario.apellido}
                        </td>
                        <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {usuario.email}
                        </td>
                        <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {usuario.clave}
                        </td>
                        <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {usuario.rol}
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

export default UsuariosPrueba;
