import React from "react";
import AppLayoutPrivate from "../../components/AppLayout/AppLayoutPrivate";

const CrearPost = () => {
  return (
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
                <input className="rounded-lg text-white text-sm px-3 py-2 bg-secundary" />
              </div>
              <div className="flex flex-col mb-3">
                <label className="block mb-2 text-secundary ">
                  Seleccionar Sistema
                </label>
                <select className="rounded-lg text-white text-sm px-3 py-2 bg-secundary border">
                  <option selected>Sistema</option>
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
                <select className="rounded-lg text-white text-sm px-3 py-2 bg-secundary border ">
                  <option selected>Categoria</option>
                  <option>Categoria1</option>
                  <option>Categoria2</option>
                  <option>Categoria3</option>
                  <option>Categoria4</option>
                  <option>Categoria5</option>
                </select>
              </div>
            </div>
            <div className="w-full pt-3 pb-3 grid place-items-center">
              <button className="font-semibold leading-none text-white py-3 px-10  rounded rounded-full bg-primary p-2 hover:bg-gray-800 font-bold">
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

CrearPost.getLayout = function getLayout(page) {
  return <AppLayoutPrivate>{page}</AppLayoutPrivate>;
};

export default CrearPost;
