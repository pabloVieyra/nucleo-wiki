import React from "react";
import Homedash from "/components/Homedash/Homedash";
import AppLayoutPrivate from "../../../components/AppLayout/AppLayoutPrivate";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const { sistema } = router.query;

  return (
    <div className="w-full  bg-secundary ">
      <Homedash system={sistema}></Homedash>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <AppLayoutPrivate>{page}</AppLayoutPrivate>;
};

export default Home;
