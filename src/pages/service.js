import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/maincontent";
import { Helmet } from "react-helmet-async";

const Service = () => {
  return (
    <>
      <Helmet>
        <title>service adverties</title>
        <meta name="description" content="service adverties applied" />{" "}
      </Helmet>
      <Header />
      <main>Service</main>

      <Footer />
    </>
  );
};

export default Service;
