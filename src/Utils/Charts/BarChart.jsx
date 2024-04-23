import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  scales,
  defaults,
  plugins
} from "chart.js";
import { Bar} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




defaults.maintainAspectRatio = false
defaults.responsive = true

export function BarChart({lable, data1, data2, bg1, bg2, axis, text, lable1, lable2, hidden}) {
  const labels = lable;

  const options = {
    plugins:{
     title:{
       display: true,
       text: text,
       font:{
         size:  20
       }
     },
    }
   }
const Data = useMemo(()=> data1,[])
   const data = {
    labels,
    datasets: [
      {
        label: lable1,
        data: Data,
        backgroundColor: bg1,
        borderRadius: "2",
        barPercentage: 1,
        indexAxis:axis,
        barThickness: 20,
  
      },
      {
        label: lable2,
        data: data2,
        backgroundColor: bg2,
        borderRadius: "2",
        barPercentage: 1,
        indexAxis: axis,
        hidden: hidden,
        barThickness:20,
      },
    ],
  };
  return <Bar  data={data} options={options}/>;
}
