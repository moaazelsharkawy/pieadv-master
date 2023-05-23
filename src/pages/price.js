import React from "react";
import Header from "../comp/header";
import Footer from '../comp/footer';
import MainContent from "../comp/maincontent";
import { Helmet } from "react-helmet-async";


const Price = () => {
  return (
    <>
    <Helmet>
        <title>price</title>
        <meta name="description" content="discover price of adverties for you" />
      </Helmet>
    <Header/>
    <MainContent   pageName="price table"         />         
      

      <Footer/>
    </>
  );
};

export default Price;
