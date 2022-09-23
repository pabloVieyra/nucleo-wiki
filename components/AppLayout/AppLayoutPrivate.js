import React from "react";
import Dashboard from "../Dashboard/Dashboard";

const AppLayoutPrivate = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Dashboard>{children}</Dashboard>
    </div>
  );
};

export default AppLayoutPrivate;
