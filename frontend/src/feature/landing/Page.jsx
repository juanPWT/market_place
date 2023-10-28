import React from "react";
import Hero from "./components/Hero";
import ProductPopular from "../product/ProductPopular";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center ">
      <div className="mt-24 ">
        <Hero />
      </div>
      <div className="my-10 z-0">
        <h1 className="my-5 font-bold bg-gradient-to-br from-orange-500 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text text-4xl mx-5">
          Popular Products
        </h1>
        <ProductPopular />
      </div>
    </div>
  );
};

export default Landing;
