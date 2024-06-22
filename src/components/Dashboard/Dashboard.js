import React from "react";
import LineChart from "../Charts/LineChart";
import Pi from "../Charts/PieChart";
import { UserData } from "../../Data";
import Header from "../Header/Header";

import "./dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Header UserData={UserData} />
      <div className="charts-container">
        <LineChart chartData={UserData} />
        <Pi chartData={UserData} />
      </div>
    </div>
  );
};

export default Dashboard;
