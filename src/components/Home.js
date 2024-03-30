import React from "react";
import Products from "./Products";
import Banner from "./Banner";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <div style={{ width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
