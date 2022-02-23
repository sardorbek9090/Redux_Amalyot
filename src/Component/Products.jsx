import React, { useState } from "react";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

function Products(props) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const respons = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await respons.clone().json());
        setFilter(await respons.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted(false);
      };
    };
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Loading = () => {
    return (
        <>
        <div className="col-md-3">
        <Skeleton height="350px" />
        </div>
        <div className="col-md-3">
        <Skeleton height="350px" />
        </div> <div className="col-md-3">
        <Skeleton height="350px" />
        </div>
        </>
    )
  };

  const filterProduct= (cat)=>{
      const updatedList= data.filter((x)=>x.category === cat)
      setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("women's clothing")} >Women's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>
            Jewelery Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")} >Electronic</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card h-100 text-center p-4 " >
                  <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-bold">
                      ${product.price}
                    </p>
                    <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;
