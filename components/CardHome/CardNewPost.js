import Image from "next/image";
import React from "react";
import simbolo from "../../public/Images/simbolo.png";

const CardNewPost = () => {
  return (
    <div>
      {" "}
      <div className=" contentsflex inline-block flex-col border rounded-lg overflow-hidden bg-white my-12 mx-6 ">
        <div className="p-12 text-gray-600">
          {/* Texto */}
          <div className="flex flex-row text-xl items-center justify-center">
            <Image src={simbolo} alt="SimboloMas"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNewPost;
