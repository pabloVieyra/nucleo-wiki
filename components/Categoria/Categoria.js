import React from "react";

const Categoria = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-green-500 my-3">
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
          <div className="flex justify-between px-5 py-4 w-4/6 w-56">
            <label className="sr-only">Buscar</label>

            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscar"
                required
              />
            </div>
          </div>

          <div className="grid  grid-flow-col ">
            <div className="col-span-2 px-5 pt-1 flex flex-col mb-3">
              <textarea
                rows="10"
                className="rounded-lg text-sm bg-white border focus:border-white-500"
              ></textarea>
            </div>
            <div className="flex flex-col row-span-2 pr-4">
              <div className="flex justify-end">
                <button className="	bg-white mr-1 m-3 w-20 rounded text-sm py-2 px-3 text-black transition duration-150">
                  Agregar
                </button>
              </div>
              <div className="flex justify-end">
                <button className="	bg-white mr-1 m-3 w-20 rounded text-sm py-2 px-3 text-black transition duration-150">
                  Modificar
                </button>
              </div>
              <div className="flex justify-end">
                <button className="	bg-white mr-1 m-3 w-20 rounded text-sm py-2 px-3 text-black transition duration-150">
                  Quitar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoria;
