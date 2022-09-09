import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

const Pruebadb = () => {
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
    <div>
      <h1>Prueba db</h1>
      {/* tipo */}
      <Input></Input>
      {/* valor */}
      <Input></Input>
      {/* orden */}
      <Input></Input>
      {/* estado */}
      <Input></Input>
      {/* post_id */}
      <Input></Input>
      <button onClick={changeComponent}> enviar a la dev</button>
    </div>
  );
};

export default Pruebadb;
