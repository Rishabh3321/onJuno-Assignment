import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  const styles = {
    background:
      "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(249,249,255,1) 0%, rgba(147,201,236,1) 100%)",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div style={styles}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
