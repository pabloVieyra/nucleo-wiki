import Image from "next/image";
import React, { useState, useEffect } from "react";
import AppLayoutPrivate from "../../components/AppLayout/AppLayoutPrivate";
import DragAndDrop from "../../components/DragAndDrop/DragAndDrop";
import AgregarComponente from "../../components/Popup/AgregarComponente";
import image from "../../public/Images/ng.png";

const PostComponent = () => {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = () => {
    setModalOn(true);
  };

  return (
    <div className="w-full  bg-secundary ">
      <DragAndDrop></DragAndDrop>
      <button
        className="relative w-full min-h-screen bg-black text-green-500"
        onClick={clicked}
      >
        Agregar component
      </button>
      {/* ---> Modales */}
      {modalOn && (
        <AgregarComponente
          setModalOn={setModalOn}
          setChoice={setChoice}
        ></AgregarComponente>
      )}
    </div>
  );
};

PostComponent.getLayout = function getLayout(page) {
  return <AppLayoutPrivate>{page}</AppLayoutPrivate>;
};

export default PostComponent;
