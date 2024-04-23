import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const LineChart = ({ labels, data1, label1, bg1, border1 }) => {
  const options = {
    // responsive: true,
    title: {
      display: true,
      text: "Line Chart",
    },
  };

  console.log(data1)
  const data = {
    labels,
    datasets: [
      {
        label: label1,
        data: data1,
        borderColor: border1,
        backgroundColor: bg1,
        fill: true,
        tension: 0.3
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
