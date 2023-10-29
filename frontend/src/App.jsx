import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./feature/landing/Page";
import PageNotFound from "./utils/404Page";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { DetailProducts } from "./feature/product/components/DetailProducts";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/product/:id" Component={DetailProducts} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
