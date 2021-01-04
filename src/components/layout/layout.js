import React from "react";
import { GlobalStyle } from "../../styles/GlobalStyles";
import Footer from "./footer";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
