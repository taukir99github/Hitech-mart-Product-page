import React from "react";
import "./Home.css";
import Dashboard from "../Dashboard/Dashboard";
import men from "../../Images/men.png";
import women from "../../Images/women.png";
import kids from "../../Images/kids.png";
import footer from "../../Images/footwear.png";
import Card from "../Card/Card";
import modelImage from "../../Images/Model.png";

const Home = () => {
  const Product = [
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
    {
      image: modelImage,
      desc: "COLLUSION x003 tapered jeans in light blue",
      price: "£22.99",
    },
  ];

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
        
        {
          Product.map((items) => <Card items={items}/>)
        }
      </div>
    </div>
  );
};

export default Home;
