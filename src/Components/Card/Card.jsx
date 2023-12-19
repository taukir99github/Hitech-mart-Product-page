import React from "react";
import "./Card.css";
import { IoIosHeartEmpty } from "react-icons/io";
import modelImg from "../../Images/Model.png";

const Card = ({ items }) => {
  return (
    <div className="product-card">
      <div className="card-wrapper">
        {items.productDetails[0]?.images[0] ? (
          <img src={items.productDetails[0].images[0]} alt="" />
        ) : (
          <img src={modelImg} alt="" />
        )}
        <IoIosHeartEmpty className="heart-icon" />
      </div>

      <div className="card-model-content">
        <p>{items.title}</p>
        <span class="WebRupee">&#x20B9; {items.realPrice}</span>
      </div>
    </div>
  );
};

export default Card;
