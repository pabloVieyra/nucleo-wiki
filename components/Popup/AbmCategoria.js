import React from "react";

const AbmCategoria = ({ setModalOn, setChoice }) => {
  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };

  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm ">
      <div className="flex justify-center items-center">
        <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-primary my-3">
          <div className="flex justify-end p-2">
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
          </div>
          <div className="flex justify-between px-5 py-4">
            <select
              name="lstAsunto"
              id="lstAsunto"
              className="bg-teal p-3 rounded text-black shadow-inner w-7/12"
            >
              <option value="" disabled selected>
                Seleccionar Sistema
              </option>
              <option value="">Ng</option>
              <option value="">G1</option>
              <option value="">Fce</option>
              <option value="">Col</option>
              <option value="">Check</option>
            </select>
          </div>

          <div className="grid  grid-flow-col ">
            <div className="col-span-2 px-5 pt-1 flex flex-col mb-3">
              <label>Nombre de la categoria</label>
              <input></input>
            </div>
            <div className="flex flex-col row-span-2 pr-4">
              <div className="flex justify-end">
                <button
                  onClick={handleOKClick}
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
  );
};

export default AbmCategoria;
