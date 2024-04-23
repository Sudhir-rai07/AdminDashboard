import React, { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

import { Pie } from "react-chartjs-2";
const PieChart = ({ labels, Cdata, labelText, bgColor, borderColor }) => {
  const chartData = useMemo(() => Cdata, []);

  const data = {
    labels,
    datasets: [
      {
        label: labelText,
        data: chartData,
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
   plugins: {
    title: {
      display: true,
      text: "Inventory",
      font:{
        size:  20
      }
    },
   }
   
  };
  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
