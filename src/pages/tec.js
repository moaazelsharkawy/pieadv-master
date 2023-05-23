import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/maincontent";
import { Helmet } from "react-helmet-async";

const Tec = () => {
  return (
    <>
      <Helmet>
        <title>technical service</title>
        <meta name="description" content="discover technical service for you" />
      </Helmet>

      <Header />
      <MainContent pageName="Technical Service" />

      <Footer />
    </>
  );
};

export default Tec;
