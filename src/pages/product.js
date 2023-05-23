import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/maincontent";
import { Helmet } from "react-helmet-async";

const Product = () => {
  return (
    <>
      <Helmet>
        <title>product adverties</title>
        <meta name="description" content="product adverties applied" />{" "}
      </Helmet>
      <Header />
      <MainContent pageName="product adverties" />

      <Footer />
    </>
  );
};

export default Product;
