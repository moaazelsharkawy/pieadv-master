import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import { Helmet } from "react-helmet-async";

const Erorr404 = () => {
  return (
    <>
      <Helmet>
        <title>Not found</title>
        <meta name="description" content="error 404" />
      </Helmet>
      <Header />
      <main>
        <div className="not-found">
          <h1 className="not-found-title">404 - Page Not Found</h1>
          <p className="not-found-message">
            Sorry, the page you are looking for does not exist.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Erorr404;
