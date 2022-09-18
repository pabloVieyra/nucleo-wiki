import React, { useState } from "react";

const CategoriaPrueba = () => {
  const [component, setComponent] = useState("");
  const changeComponent = () => {
    fetch(`http://localhost:3000/api/componentes/`)
      .then((response) => response.json())
      .then((response) => {
        const filtrado = response.filter((r) => r.tags == e);
        setProducts(filtrado);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-black p-10 blur">
      <h1 className="text-white"> Categoria</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex  flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Nombre
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p className="text-red text-xs italic">huevos</p>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Sistema
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="grid-state"
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
      <button onClick={changeComponent} className="text-white">
        enviar a la dev
      </button>
    </div>
  );
};

export default CategoriaPrueba;
