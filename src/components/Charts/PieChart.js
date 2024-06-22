// import React from "react";
// import { Pie } from "react-chartjs-2";

// function PieChart({ chartData }) {
//   return <Pie data={chartData} />;
// }

// export default PieChart;

import { PieChart, Pie, Legend, Tooltip } from "recharts";
import "./index.css";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const Pi = ({ chartData }) => {
  const data = chartData.map((each) => ({
    name: each.year,
    gain: each.userGain,
    lost: each.userLost,
  }));

  return (
    <PieChart width={1000} height={400}>
      <Pie
        dataKey="gain"
        isAnimationActive={true}
        data={data}
        cx={200}
        cy={200}
        outerRadius={110}
        fill="green"
        label
      />
      <Pie
        dataKey="lost"
        data={data}
        cx={500}
        cy={200}
        outerRadius={100}
        fill="red"
        label
      />
      <Tooltip />
    </PieChart>
  );
};

export default Pi;
