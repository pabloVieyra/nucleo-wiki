import React from "react";
import Homedash from "/components/Homedash/Homedash";
import AppLayoutPrivate from "../../components/AppLayout/AppLayoutPrivate";

const HomeDashboard = () => {
  return (
    <div className="w-screen h-screen h-full  bg-secundary ">
      <h1 className="text-4xl font-serif text-center text-white	">
        Bienvenido al Dashboard de la WIKI
      </h1>
    </div>
  );
};

HomeDashboard.getLayout = function getLayout(page) {
  return <AppLayoutPrivate>{page}</AppLayoutPrivate>;
};

export default HomeDashboard;
