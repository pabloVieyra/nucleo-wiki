import React, { useState } from "react";
import CategoriaPrueba from "../components/PruebasDb-Cosas/CategoriaPrueba";
import ComponentsPrueba from "../components/PruebasDb-Cosas/ComponentsPrueba";
import FavoritosPrueba from "../components/PruebasDb-Cosas/FavoritosPrueba";
import PostPrueba from "../components/PruebasDb-Cosas/PostPrueba";
import UsuariosPrueba from "../components/PruebasDb-Cosas/UsuariosPrueba";

const Pruebadb = () => {
  return (
    <div className="bg-gray-900 p-2 flex justify-center  ">
      <div className="bg-black w-3/4">
        <CategoriaPrueba></CategoriaPrueba>
        <ComponentsPrueba></ComponentsPrueba>
        <FavoritosPrueba></FavoritosPrueba>
        <PostPrueba></PostPrueba>
        <UsuariosPrueba></UsuariosPrueba>
      </div>
    </div>
  );
};

export default Pruebadb;
