import React, { useState, useEffect } from "react";
import AppLayoutPrivate from "../../components/AppLayout/AppLayoutPrivate";
import axios from "axios";
import { useFormik } from "formik";
import Swal from "sweetalert2";

const CrearPost = () => {
  const [categorias, setCategorias] = useState([]);

  const formik = useFormik({
    initialValues: {
      Nombre: "",
      Sistema: 1,
      Categoria: 1,
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

      PostPost(values);
    },
  });

  const PostPost = (values) => {
    axios
      .post("/api/Post", {
        nombre: values.Nombre,
        sistema: values.Sistema,
        categoria_id: values.Categoria,
        visitas: 0,
        valoraciones: 0,
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
        setCategorias(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    GetCategoria();
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <section>
          <div className="lg:px-40  min-h-screen w-full flex flex-col items-center justify-center bg-secundary">
            <div className="flex flex-col md:w-1/2 pt-2 px-8 mb-16 mr-32 text-4xl">
              <h1 className="text-white">Bienvenido a Crear Post</h1>
            </div>

            <form action="#" className="rounded-lg md:w-1/2 pt-2 px-8 bg-white">
              <h2 className="text-2xl pb-3 font-semibold text-secundary">
                Post Nombre Post
              </h2>
              <div>
                <div className="flex flex-col mb-3">
                  <label className="text-secundary text-sm pb-3">
                    Nombre del Post
                  </label>
                  <input
                    id="Nombre"
                    type="text"
                    className="rounded-lg text-white text-sm px-3 py-2 bg-secundary"
                    onChange={formik.handleChange}
                    value={formik.values.Name}
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="block mb-2 text-secundary ">
                    Seleccionar Sistema
                  </label>
                  <select
                    className="rounded-lg text-white text-sm px-3 py-2 bg-secundary border"
                    name="Sistema"
                    id="Sistema"
                    onChange={formik.handleChange}
                    value={formik.values.Sistema}
                  >
                    <option value="" disabled selected>
                      Seleccionar Sistema
                    </option>
                    <option>NG</option>
                    <option>G1</option>
                    <option>CHECK</option>
                    <option>FCE</option>
                    <option>COL</option>
                  </select>
                </div>
                <div className="flex flex-col mb-3">
                  <label className="block mb-2 text-secundary ">
                    Seleccionar categoria
                  </label>
                  <select
                    className="rounded-lg text-white text-sm px-3 py-2 bg-secundary border "
                    name="Categoria"
                    id="Categoria"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.Categoria}
                  >
                    <option value="" disabled selected>
                      Seleccionar Categoria
                    </option>

                    {categorias.map((categoria) => {
                      if (categoria == null) {
                        return <></>;
                      } else {
                        return (
                          <option value={categoria.id} key={categoria.id}>
                            {categoria.nombre}
                          </option>
                        );
                      }
                    })}
                  </select>
                </div>
              </div>
              <div className="w-full pt-3 pb-3 grid place-items-center">
                <button
                  onClick={formik.handleSubmit}
                  className="font-semibold leading-none text-white py-3 px-10  rounded rounded-full bg-primary p-2 hover:bg-gray-800 font-bold"
                >
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </form>
  );
};

CrearPost.getLayout = function getLayout(page) {
  return <AppLayoutPrivate>{page}</AppLayoutPrivate>;
};

export default CrearPost;
