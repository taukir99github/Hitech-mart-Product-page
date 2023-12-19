import React, { useEffect, useState } from "react";
import "./Home.css";
import Dashboard from "../Dashboard/Dashboard";
import men from "../../Images/men.png";
import women from "../../Images/women.png";
import kids from "../../Images/kids.png";
import footer from "../../Images/footwear.png";
import Card from "../Card/Card";
// import modelImage from "../../Images/Model.png";

const Home = () => {

  const [products, setProducts] = useState([])


  useEffect(() => {
    const getAllProdcuts = async () => {
      const allProducts = await fetch(`http://localhost:8000/product/get-all-products`,).then(res => res).then(res => res.json()).catch((err) => {
        console.log("Error", err)
      })
      console.log(allProducts)
      setProducts(allProducts)


      
    }
    getAllProdcuts()
  }, [])
  return (
    <div className="Home-main">
      <div className="Home-upper-sec">
        <div className="Home-upper-sec-1">
          <Dashboard />
        </div>
        <div className="Home-upper-sec-2">
          <div className="card-main-collection">
            <div className="collection-card">
              <img src={men} alt="" />
            </div>
            <div className="collection-card">
              <img src={women} alt="" />
            </div>
            <div className="collection-card">
              <img src={kids} alt="" />
            </div>
            <div className="collection-card">
              <img src={footer} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="product-section">
        {products.map((items) => (
          <Card items={items} />
        ))}
      </div>
    </div>
  );
};

export default Home;
