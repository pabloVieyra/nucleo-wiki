import React from "react";
import Image from "next/image";
import simbolo from "../../public/Images/simbolo.png";
import CardHome from "../CardHome/CardHome";

const Homedash = () => {
  return (
    <>
      <div className="ml-20 bg-gray-900 h-screen">
        <div className="flex justify-center grid gap-x-8 gap-y-4 grid-cols-4">
          <CardHome></CardHome>
          <CardHome></CardHome>
          <CardHome></CardHome>
          <CardHome></CardHome>
          <div className=" contentsflex inline-block flex-col border rounded-lg overflow-hidden bg-white my-12 mx-6 ">
            <div className="p-12 text-gray-600">
              {/* Texto */}
              <div className="flex flex-row text-xl items-center justify-center">
                <Image src={simbolo} alt="SimboloMas"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homedash;
