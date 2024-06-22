import React from "react";
import "./index.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarChart = ({ chartData }) => {
  // console.log("hjbfdhjfdmfd =?>>>>", chartData);
  return (
    <div className="chart-container">
      <LineChart width={500} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="userGain"
          stroke="green"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="userLost" stroke="red" />
      </LineChart>
      <h1>Line Chart</h1>
    </div>
  );
};

export default BarChart;
