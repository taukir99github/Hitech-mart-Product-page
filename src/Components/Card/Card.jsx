import React from "react";
import "./Card.css";
import { IoIosHeartEmpty } from "react-icons/io";
import modelImg from "../../Images/Model.png";

const Card = () => {
  return (
    <div className="product-card">
      <div className="card-wrapper">
        <img src={modelImg} alt="" />
        <IoIosHeartEmpty className="heart-icon" />
      </div>

      <div className="card-model-content">
        <p>COLLUSION x003 tapered jeans in light blue</p>
        <span>£22.99</span>
      </div>
    </div>
  );
};

export default Card;
