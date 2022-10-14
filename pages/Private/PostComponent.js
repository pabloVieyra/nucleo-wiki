import Image from "next/image";
import React from "react";
import AppLayoutPrivate from "../../components/AppLayout/AppLayoutPrivate";
import DragAndDrop from "../../components/DragAndDrop/DragAndDrop";
import image from "../../public/Images/ng.png";

const PostComponent = () => {
  return (
    <div>
      <DragAndDrop></DragAndDrop>
    </div>
  );
};

PostComponent.getLayout = function getLayout(page) {
  return <AppLayoutPrivate>{page}</AppLayoutPrivate>;
};

export default PostComponent;
