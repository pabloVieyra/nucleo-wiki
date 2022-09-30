import React from "react";
import AppLayoutPrivate from "../../components/AppLayout/AppLayoutPrivate";
import Homedash from "/components/Homedash/Homedash";

const HomeDashboard = () => {
  return (
    <div>
      <Homedash></Homedash>
    </div>
  );
};

HomeDashboard.getLayout = function getLayout(page) {
  return <AppLayoutPrivate>{page}</AppLayoutPrivate>;
};

export default HomeDashboard;
