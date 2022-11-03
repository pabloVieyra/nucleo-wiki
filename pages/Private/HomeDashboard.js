import React from "react";
import Homedash from "/components/Homedash/Homedash";
import AppLayoutPrivate from "../../components/AppLayout/AppLayoutPrivate";

const HomeDashboard = () => {
  return <div className="w-full  bg-secundary "></div>;
};

HomeDashboard.getLayout = function getLayout(page) {
  return <AppLayoutPrivate>{page}</AppLayoutPrivate>;
};

export default HomeDashboard;
