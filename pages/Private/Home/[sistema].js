import React from "react";
import Homedash from "/components/Homedash/Homedash";
import AppLayoutPrivate from "../../../components/AppLayout/AppLayoutPrivate";

const Home = () => {
  return (
    <div className="bg-gray-900 ">
      <Homedash></Homedash>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <AppLayoutPrivate>{page}</AppLayoutPrivate>;
};

export default Home;
