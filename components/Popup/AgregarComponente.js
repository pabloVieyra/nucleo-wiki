import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import Swal from "sweetalert2";

const AgregarComponente = ({ setModalOn, setChoice, post }) => {
  const formik = useFormik({
    initialValues: {
      Tipo: 1,
      Valor: "",
      Orden: 1,
      Post_id: post,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      setChoice(true);
      setModalOn(false);
      PostComponent(values);
    },
  });

  const PostComponent = (values) => {
    axios
      .post("/api/Componentes", {
        tipo: values.Tipo,
        valor: values.Valor,
        orden: values.Orden,
        post_id: values.Post_id,
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

  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm ">
        <div className="flex justify-center items-center">
          <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-green-500 my-3">
            <div className="flex justify-end p-2">
              <button onClick={handleCancelClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
            <div className="flex justify-between px-5 py-4">
              <select
                name="Tipo"
                id="Tipo"
                className="bg-teal p-3 rounded text-black shadow-inner w-7/12"
                onChange={formik.handleChange}
                value={formik.values.Sistema}
              >
                <option value="" disabled selected>
                  Seleccionar
                </option>
                <option value="1">Titulo-H1</option>
                <option value="5">Subtitulo-H2</option>
                <option value="6">Subtitulo-H3</option>
                <option value="4">Parrafo</option>
                <option value="2">Imagen</option>
                <option value="3">Video</option>
              </select>
            </div>

            <div className="col-span-2 px-5 pt-1 flex flex-col mb-3">
              <label htmlFor="Orden">Orden</label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="Orden"
                type="number"
                placeholder="1"
                onChange={formik.handleChange}
                value={formik.values.Orden}
              />
            </div>

            <div className="grid  grid-flow-col ">
              <div className="col-span-2 px-5 pt-1 flex flex-col mb-3">
                <h1>Valor</h1>
                <textarea
                  name="Valor"
                  id="Valor"
                  className="rounded-lg text-sm bg-white border focus:border-white-500"
                  onChange={formik.handleChange}
                  value={formik.values.Valor}
                ></textarea>
              </div>
              <div className="flex flex-col row-span-2 pr-4">
                <div className="flex justify-end">
                  <button
                    onClick={formik.handleSubmit}
                    className="	bg-white mr-1 m-3 w-20 rounded text-sm py-2 px-3 text-black transition duration-150"
                  >
                    Guardar
                  </button>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleCancelClick}
                    className="	bg-white mr-1 m-3 w-20 rounded text-sm py-2 px-3 text-black transition duration-150"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AgregarComponente;
