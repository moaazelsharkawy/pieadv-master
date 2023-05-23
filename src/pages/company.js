import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/maincontent";
import { Helmet } from "react-helmet-async";

const Company = () => {
  return (
    <>
      <Helmet>
        <title>comoany adverties</title>
        <meta name="description" content="company adverties applied" />
      </Helmet>
      <Header />

      <MainContent pageName="company advertise" />

      <Footer />
    </>
  );
};

export default Company;
