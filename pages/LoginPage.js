import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import Login from "../components/Login/Login";

const LoginPage = () => {
  return (
    <div>
      <Login></Login>
    </div>
  );
};

LoginPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default LoginPage;
