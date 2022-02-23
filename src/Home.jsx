import React from "react";
import Rasm from './assets/foto/Home.jpg'
import Products from "./Component/Products";

function Home(props) {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={Rasm} className="card-img" alt="background" height="550px" />
        <div className="card-img-overlay d-flex flex-column">
         <div className="container">
         <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead  fs-2">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. 
          </p>
         </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
