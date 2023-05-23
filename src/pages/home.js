import React from "react";
import Header from "../comp/header";
import Footer from '../comp/footer';
import MainContent from "../comp/maincontent";
import { Helmet } from "react-helmet-async";




const Home = () => {
  return (
    <>
    <Helmet>
        <title>home</title>
        <meta name="description" content="web 3 adverties application for pi network" />
      </Helmet>
<Header/>

<MainContent   pageName="Home"         />         
      

      <Footer/>

    </>
  );
};

export default Home;
