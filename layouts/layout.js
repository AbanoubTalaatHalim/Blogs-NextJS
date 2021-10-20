import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Codv Blog</title>
        <link rel="icon" href="/logo.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
