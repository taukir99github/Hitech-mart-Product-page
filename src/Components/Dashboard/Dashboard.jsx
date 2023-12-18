import React from "react";
import "./Dashboard.css";
import Range from "../Range/Range";

const Dashboard = () => {
  return (
    <div className="Dashboard-main">
      <div className="Dashboard-card">
        <div className="Dashboard-card-text">
          <span>Product categories</span>
        </div>
        <div className="card-checkbox">
          <div className="part1">
            <div className="checkbox">
              <input type="checkbox" value="option2" />
              <label> Garments</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" value="option2" />
              <label> Kids</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" value="option2" />
              <label> Mens</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" value="option2" />
              <label> Women</label>
            </div>
          </div>
        </div>

        <div className="dashboard-filter">
          <div className="filter-text">
            <h3>Filter By Price</h3>
          </div>
          <div>
            <Range />
          </div>
        </div>
        <div className="Card-btn">
          <button>Filter</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
