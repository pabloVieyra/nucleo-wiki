import React from "react";
import AppLayoutPrivate from "../components/AppLayout/AppLayoutPrivate";
import Dashboard from "../components/Dashboard/Dashboard";
import Homedash from "/components/Homedash/Homedash";

const HomeDashboard = () => {
  return (
    <div>
      <Dashboard>
        <Homedash></Homedash>
      </Dashboard>
    </div>
  );
};
export default HomeDashboard;
