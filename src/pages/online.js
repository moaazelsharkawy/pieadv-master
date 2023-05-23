import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/maincontent";
import { Helmet } from "react-helmet-async";

const Online = () => {
  return (
    <>
      <Helmet>
        <title>online service</title>
        <meta name="description" content="discover online service for you" />
      </Helmet>
      <Header />
      <MainContent pageName="online service" />

      <Footer />
    </>
  );
};

export default Online;
