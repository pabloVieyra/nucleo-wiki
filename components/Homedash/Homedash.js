import React from "react";
import Image from "next/image";

import CardHome from "../CardHome/CardHome";
import CardNewPost from "../CardHome/CardNewPost";

const Homedash = () => {
  return (
    <>
      <div className="ml-20 bg-gray-900 h-screen">
        <div className="flex justify-center grid gap-x-8 gap-y-4 grid-cols-4">
          <CardHome></CardHome>
          <CardHome></CardHome>
          <CardHome></CardHome>
          <CardHome></CardHome>
          <CardNewPost></CardNewPost>
        </div>
      </div>
    </>
  );
};

export default Homedash;
