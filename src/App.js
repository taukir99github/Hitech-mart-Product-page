import React, { useEffect, useState } from 'react'
import Home from './Components/Home.jsx/Home'
import { IoIosHeartEmpty } from 'react-icons/io';
import modelImg from './Images/Model.png'
import './App.css'

const App = () => {

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a delay for demonstration purposes
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div>
    <Home/>
    {/* <div className={`product-card ${loading ? "loading" : ""}`}>
      {loading ? (
        <div className="skeleton-loader"></div>
      ) : (
        <>
          <div className="card-wrapper">
            <img src={modelImg} alt="" />
            <IoIosHeartEmpty className="heart-icon" />
          </div>

          <div className="card-model-content">
            <p>COLLUSION x003 tapered jeans in light blue</p>
            <span className="WebRupee">&#x20B9; 399</span>
          </div>
        </>
      )}
    </div> */}

   
    </div>
  )
} 

export default App
