import React from "react";

const ComponentsPrueba = () => {
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
      <h1 className="text-white"> Components</h1>
    </div>
  );
};

export default ComponentsPrueba;
