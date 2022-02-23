import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar";
import "./App.css";
import Home from "./Home";
import Products from "./Component/Products";
import Product from "./Component/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products/>}/>
        <Route path="product/:id" element={<Product/>}/>
      </Routes>
    </>
  );
}

export default App;
