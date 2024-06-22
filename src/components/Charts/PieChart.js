import { PieChart, Pie, Legend, Tooltip } from "recharts";
import "./index.css";

const Pi = ({ chartData }) => {
  const data = chartData.map((each) => ({
    name: each.year,
    gain: each.userGain,
    lost: each.userLost,
  }));

  return (
    <div className="chart-container">
      <PieChart width={700} height={400}>
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
      <h1>Pie Chart</h1>
    </div>
  );
};

export default Pi;
