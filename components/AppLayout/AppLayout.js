import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const AppLayout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar></NavBar>
      {children}

      <Footer></Footer>
    </div>
  );
};

export default AppLayout;
