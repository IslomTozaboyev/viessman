import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ContainerWrapper from "./ContainerWrapper";
import Header from "./Header";
import Footer from "./Footer/Footer";
import data from "../Data/data-footer";

const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Header />
      {children}
      <Footer data={data} />
    </ContainerWrapper>
  );
};

export default Container;
