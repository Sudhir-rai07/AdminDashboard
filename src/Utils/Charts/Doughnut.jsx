import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  defaults,
} from "chart.js";
import { Doughnut} from "react-chartjs-2";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement
);



defaults.maintainAspectRatio = false
defaults.responsive = true

const labels = ["Male",  "Female"];
export function DoughnutChart({data1, bg, text}) {

  const options = {
    plugins:{
     title:{
       display: true,
       text: text,
       font:{
         size:  20
       }
     },
    },
    cutout: "75%",
    width: 400,
    height: 400,
   }

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: data1,
        backgroundColor:bg,
        borderRadius: "4px",
      },
    ],
  };

  return <Doughnut data={data} options={options}/>;
}
