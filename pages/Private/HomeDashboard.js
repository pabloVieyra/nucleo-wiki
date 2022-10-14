import React from "react";
import AgregarComponente from "../../components/AgregarComponente/AgregarComponente";
import AppLayoutPrivate from "../../components/AppLayout/AppLayoutPrivate";
import Categoria from "../../components/Categoria/Categoria";
import Homedash from "/components/Homedash/Homedash";

const HomeDashboard = () => {
  return (
    <div className="bg-gray-900 ">
      <Homedash></Homedash>

      <AgregarComponente></AgregarComponente>
      <Categoria></Categoria>
    </div>
  );
};

HomeDashboard.getLayout = function getLayout(page) {
  return <AppLayoutPrivate>{page}</AppLayoutPrivate>;
};

export default HomeDashboard;
