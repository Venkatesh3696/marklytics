import React from "react";

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
    <div>
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
    </div>
  );
};

export default BarChart;
